import React, { useEffect, useRef } from 'react';
import M from 'materialize-css';
import axios from 'axios'

export const AddEmployee = (props) => {
    const nameInput = useRef();
    const secInput = useRef();
    const posInput = useRef();
    const salaryInput = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            empName: nameInput.current.value,
            empSection: secInput.current.value,
            empPos: posInput.current.value,
            empSalary: salaryInput.current.value
        }
        sendReq('employees', formData);
    }

    return (
        <form id='employeeField' className='input-field col s12'>
            <div className='row'>
                <div className='input-field col s3'>
                    <label htmlFor='empName'>Full Name</label>
                    <input ref={nameInput} type="text" id='empName'></input>
                </div>
                <div className='input-field col s3'>
                    <select id='empSection' ref={secInput}>
                        <option value="" disabled selected>Choose service section</option>
                        <option value="Management">Management</option>
                        <option value="HouseKeeping">HouseKeeping</option>
                        <option value="Reception">Reception</option>
                        <option value="RoomService">RoomService</option>
                    </select>
                    <label>Services Section</label>
                </div>
                <div className='input-field col s3'>
                    <label htmlFor='empPosition'>Position</label>
                    <input type="text" id='empPosition' ref={posInput} ></input>
                </div>
                <div className='input-field col s3'>
                    <label htmlFor='empSalary'>Salary</label>
                    <input type="text" id='empSalary' ref={salaryInput}></input>
                </div>
            </div>
            <div className='row'>
                <button className='btn col s2' onClick={handleSubmit}>Submit</button>
            </div>
        </form>
    )
}

export const AddRoom = (props) => {

    const roomNum = useRef();
    const roomCap = useRef();
    const roomBed = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            roomNum: roomNum.current.value,
            roomCap: roomCap.current.value,
            roomBed: roomBed.current.value
        }
        sendReq('rooms', formData);
    }

    return (
        <form id='roomField' className='input-field col s12'>
            <div className='row'>
                <div className='input-field col s3'>
                    <label htmlFor='roomNum'>Room Number</label>
                    <input type="text" id='roomNum' ref={roomNum}></input>
                </div>
                <div className='input-field col s3'>
                    <label htmlFor='roomCap'>Room Capacity</label>
                    <input type="text" id='roomCap' ref={roomCap}></input>
                </div>
                <div className='input-field col s3'>
                    <select id='roomType' ref={roomBed}>
                        <option value="" disabled selected>Choose bed's type</option>
                        <option value="King">King</option>
                        <option value="Queen">Queen</option>
                        <option value="Single">Single</option>
                        <option value="Double">Double</option>
                    </select>
                    <label>Bed's Type</label>
                </div>
            </div>
            <div className='row'>
                <button className='btn col s2' onClick={handleSubmit}>Submit</button>
            </div>
        </form>
    )
}


export const AddEvent = (props) => {

    // "states", setState Doesnt work with Materialize Picker
    let eventName = '';

    var startPicker = useRef();
    var endPicker = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        sendReq('events', {
            eventName,
            eventStart: [startPicker.current.toString()],
            eventEnd: [endPicker.current.toString()]
        })
    }
    useEffect(() => {
        //initialize startPicker
        startPicker.current = M.Datepicker.init(document.querySelectorAll('#eventStart'), {
            format: 'yyyy-mm-dd',
        })

        // initialize the endPicker
        endPicker.current = M.Datepicker.init(document.querySelectorAll('#eventEnd'), {
            format: 'yyyy-mm-dd',
        })
    })


    return (
        <form id='eventField' className='input-field col s12'>
            <div className='row'>
                <div className='input-field col s3'>
                    <label htmlFor='eventName'>Event's Name</label>
                    <input type="text" id='eventName' onChange={(e) => eventName = e.target.value}></input>
                </div>
                <div className='input-field col s3'>
                    <label htmlFor='eventStart'>Event's Start Date</label>
                    <input id='eventStart' type="text" className="datepicker" />
                </div>
                <div className='input-field col s3'>
                    <label htmlFor='eventEnd'>Event's End Date</label>
                    <input id='eventEnd' type="text" className="datepicker" />
                </div>
            </div>
            <div className='row'>
                <button className='btn col s2' onClick={handleSubmit}>Submit</button>
            </div>
        </form>
    )
}

const sendReq = async (dest, data) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
    try {
        await axios.post(`http://localhost:9000/api/restricted/${dest}`, data, {
            headers: headers
        })
        alert('Success :)');
    } catch (error) {
        alert(`Something went wrong :(
            Please try again`)
    }
}