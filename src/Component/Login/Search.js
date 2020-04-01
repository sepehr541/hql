import React, { useState, useRef, useEffect } from 'react';
import BackButton from './BackButton';
import CategorySelector from './CategorySelector';
import TableRow from './TableRow';
import LoadingBar from './LoadingBar';
import Unauthorized from './Unauthorized';
import './Search.css';
import axios from 'axios';

const Update = (props) => {
    const [data, setData] = useState([]);
    const [currCat, setCurrentCat] = useState(null);
    const [findPressed, setFindPressed] = useState(false);
    const [loading, setLoading] = useState(true);

    let category = useRef();
    let inputField = useRef(null);
    let posInput = useRef();
    let salaryInput = useRef();
    let roomBed = useRef();
    let roomCap = useRef();

    const url = 'http://localhost:9000/api/restricted/'
    const auth = useRef(false);

    const handleBedType = (e) => {
        roomBed.current = e.target.value;
    }

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
        const token = localStorage.getItem('token');
        const data = category.current === 'Employee' ? 
        {
            table:'employees',
            columns :{
                salary: salaryInput.current,
                position: posInput.current
            }
        }: {
            table:'room',
            columns:{
                capacity: roomCap.current,
                bedtype: roomBed.current
            }
        };
        try {
            const resp = await axios.post(url + 'search',
                data, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            })
            setData(resp.data);
            setFindPressed(true);
        } catch (error) {
            console.log(error);
            alert('Error, could not retrive data from the server');
        }
    }

    const handleChange = (e) => {
        console.log(e.target);
        category.current = e.target.value;
        switch (e.target.value) {
            case "Employee":
                setCurrentCat(
                    <div className='row'>
                        <div className='input-field col s3'>
                            <label htmlFor='empPosition'>Position</label>
                            <input type="text" id='empPosition' onChange={(e) => posInput.current = e.target.value} ></input>
                        </div>
                        <div className='input-field col s3'>
                            <label htmlFor='empSalary'>Salary</label>
                            <input type="text" id='empSalary' onChange={(e) => salaryInput.current = e.target.value}></input>
                        </div>
                    </div>
                )
                break;
            case "Room":
                setCurrentCat(
                    <div className='row'>
                        <div className='input-field col s3'>
                            <label htmlFor='roomCap'>Room Capacity</label>
                            <input type="text" id='roomCap' onChange={(e) => roomCap.current = e.target.value}></input>
                        </div>
                        <CategorySelector options={['King', 'Queen', 'Single', 'Double']} lable={'Bed Type'} id={'bedTypeSelector'} handleChange={handleBedType} />
                    </div>
                )
                break;
            default:
                inputField.current = 'invalid'
        }
        console.log(inputField.current);
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
                <CategorySelector options={['Employee', 'Room']} lable={'Category'} handleChange={handleChange} />
            </div>
            {currCat}
            <div className='row'>
                {currCat ? <button className='btn col s3' onClick={handleFind}>Find</button> : null}
            </div>
            {render}
        </div>
    )
};

export default Update;