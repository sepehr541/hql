import React, { useEffect, useRef } from 'react'
import { AddEmployee, AddRoom, AddEvent } from './AddFroms';
import { useHistory } from 'react-router-dom'
import M from 'materialize-css'
import './Add.css'

const Add = (props) => {
    const history = useHistory();
    // ref for tracking and display
    const currCat = useRef(null);
    const prevCat = useRef(null);

    // shows the currect inputs for each category
    const handleChange = (e) => {
        const curr = document.getElementById(e.target.value)
        prevCat.current = currCat.current;
        if (prevCat.current !== null)
            prevCat.current.style.display = 'none';
        currCat.current = curr;
        currCat.current.style.display = 'block';
    }
    useEffect(() => {
        // initalizes the select fields
        var elems = document.querySelectorAll('select');
        var instances = M.FormSelect.init(elems, {});
    }, [])

    return (
        <div id='dashboardAdd' className='container center'>
            <div className='row'>
                <button className='btn col s2 ' onClick={() => history.push('/dashboard')}>
                    <i className='small material-icons'>arrow_back</i>
                </button>
            </div>
            <div id='MainFormAdd'className='row'>
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
        </div>
    )
}

export default Add;