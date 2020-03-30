import React from 'react'
import DashboardIcon from './DashboardIcon'
import './Dashboard.css'
const Dashboard = () => {
    return (
        <div id='dashboard' className='container'>
            <div className='row'>
                <DashboardIcon id='employees' dest='employees' icon='assignment_ind' title='Employees' />
                <DashboardIcon id='resv' dest='resv' icon='import_contacts' title='Reservations' />
                <DashboardIcon id='rooms' dest='rooms' icon='hotel' title='Rooms' />
            </div>
            <div className='row'>
                <DashboardIcon id='events' dest='events' icon='event' title='Events' />
                <DashboardIcon id='add' dest='add' icon='add' title='Add' />
                <DashboardIcon id='search' dest='search' icon='search' title='Search' />
            </div>
        </div>
    )
}

export default Dashboard