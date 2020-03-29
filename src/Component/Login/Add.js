import React, { useEffect, useRef, useState } from 'react'
import { AddEmployee, AddRoom, AddEvent } from './AddFroms';
import { useHistory } from 'react-router-dom'
import M from 'materialize-css'
import './Add.css'
import axios from 'axios';

const Add = (props) => {
    const history = useHistory();
    // ref for tracking and display
    const currCat = useRef(null);
    const prevCat = useRef(null);

    // state management
    const [auth, setAuth] = useState(false);
    const [loading, setLoading] = useState(true);

    // shows the currect inputs for each category
    const handleChange = (e) => {
        const curr = document.getElementById(e.target.value)
        prevCat.current = currCat.current;
        if (prevCat.current !== null)
            prevCat.current.style.display = 'none';
        currCat.current = curr;
        currCat.current.style.display = 'block';
    }

    const url = 'http://localhost:9000/api/restricted/'
    useEffect(() => {
        const checkauth = async () => {
            const token = localStorage.getItem('token')
            try {
                await axios.get(url, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }

                })

                setAuth(true);
                // initalizes the select fields
                var elems = document.querySelectorAll('select');
                M.FormSelect.init(elems, {});
            } catch (error) {
                setAuth(false);
            } finally {
                setLoading(false);
            }
        }
        checkauth();
    }, [auth])

    if (loading) {
        return (
            <div className='container center'>
                <div id='addSpinner' className="progress center">
                    <div className="indeterminate"></div>
                </div>
            </div>
        )
    } else {
        return (
            auth ?
                <div id='dashboardAdd' className='container center'>
                    <div className='row'>
                        <button className='btn col s2 ' onClick={() => history.push('/dashboard')}>
                            <i className='small material-icons'>arrow_back</i>
                        </button>
                    </div>
                    <div id='MainFormAdd' className='row'>
                        <div className="input-field col s3">
                            <select id='categorySelect' onChange={handleChange}>
                                <option value="" disabled selected>Choose your option</option>
                                <option value="employeeField">Employee</option>
                                <option value="roomField">Room</option>
                                <option value="eventField">Event</option>
                            </select>
                            <label>Category</label>
                        </div>
                    </div>
                    <div className='row'>
                        <AddEmployee />
                        <AddRoom />
                        <AddEvent />
                    </div>
                </div> :
                <div id='authFailed' className='center'>
                    <i className='large material-icons'>error_outline</i>
                    <h2>403: Unauthorized Access</h2>
                    <h3>try to <a href='/login'>login</a></h3>
                </div>
        )
    }

}

export default Add;