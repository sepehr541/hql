import React, { useState, useRef, useEffect } from 'react';
import BackButton from './BackButton';
import TableRow from './TableRow';
import LoadingBar from './LoadingBar';
import Unauthorized from './Unauthorized';
import './Search.css';
import axios from 'axios';

const Projection = (props) => {
    const [data, setData] = useState([]);
    const [findPressed, setFindPressed] = useState(false);
    const [loading, setLoading] = useState(true);

    const url = '/api/restricted/'
    const auth = useRef(false);

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
        const checkauth = async () => {
            const token = localStorage.getItem('token')
            try {
                await axios.get(url, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                auth.current = true;
            } catch (error) {
                auth.current = false;
            } finally {
                setLoading(false);
            }
        }
        checkauth();
    })

    const handleFind = async (e) => {
        var x = document.getElementById("empCheckbox");
        console.log(x.elements.length);
        var vals = []
        for (let i = 0; i < x.elements.length; i++) {
            if(x.elements[i].checked) {
                vals.push(x.elements[i].value);
            } 
        }
        setFindPressed(true);

        try {
            const token = localStorage.getItem('token');
            const resp = await axios.post(url + 'proj',
                vals, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            })
            setData(resp.data);
        } catch (error) {
            console.log(error);
            alert('Error, could not retrive data from the server');
        }

    }

    let render = null;
    if (loading) {
        render = (
            <LoadingBar />
        )
    } else {
        if (!(auth.current)) {
            render = (
                <Unauthorized />
            )
        } else {
            if (findPressed & data.length === 0) {
                render = (
                    <h4>Provided ID did not match any row</h4>
                )
            } else if (findPressed) {
                render = (
                    <table>
                        <thead>
                            <tr>
                                {Object.keys(data[0]).map(key => <th key={'header' + key} >{key}</th>)}
                            </tr>
                        </thead>
                        <tbody>{Object.values(data).map((row, i) => <TableRow url={url} data={row} index={i} withDelete={false} setDeleted={() => { }} />)}</tbody>
                    </table>
                )
            }
        }
    }
    return (
        <div id='dashboardUpdate' className='container center'>
            <div className='row'>
                <BackButton />
            </div>
            <div className='row'>
                <h5>Choose condition on employee</h5>
                <form id='empCheckbox' >

                        <p className='col s2'>
                            <label>
                                <input type="checkbox" value='employeeid' />
                                <span>Id</span>
                            </label>
                        </p>
                        <p className='col s2'>
                            <label>
                                <input type="checkbox" value='name'/>
                                <span>Name</span>
                            </label>
                        </p>
                        <p className='col s2'>
                            <label>
                                <input type="checkbox" value='position'/>
                                <span>Position</span>
                            </label>
                        </p>
                        <p className='col s2'>
                            <label>
                                <input type="checkbox" value='salary'/>
                                <span>Salary</span>
                            </label>
                        </p>
                </form>
            </div>
            <div className='row'>
                <button className='btn col s3' onClick={handleFind}>Find</button>
            </div>
            {render}
        </div>
    )
};

export default Projection;