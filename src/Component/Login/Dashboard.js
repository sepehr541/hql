import React from 'react'
import { useHistory } from "react-router-dom";
import './Dashboard.css'
const Dashboard = () => {
    const history = useHistory();
    return (
        <div id='dashboard' className='container'>
            <div className='row'>
                <div className='center col s4'>
                    <div id='employees' className='card small hoverable' onClick={() => history.push('/dashboard/employees')}>
                        <div className="card-content">
                            <i className="large material-icons">assignment_ind</i>
                            <span className="card-title">Employees</span>
                        </div>
                    </div>
                </div>
                <div className='center col s4'>
                    <div id='resv' className='card small hoverable' onClick={() => history.push('/dashboard/resv')}>
                        <div className="card-content">
                            <i className="large material-icons">import_contacts</i>
                            <span className="card-title">Reservations</span>
                        </div>
                    </div>
                </div>
                <div className='center col s4'>
                    <div id='rooms' className='card small hoverable' onClick={() => history.push('/dashboard/rooms')}>
                        <div className="card-content">
                            <i className="large material-icons">hotel</i>
                            <span className="card-title">Rooms</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard