import React from 'react'
import { useHistory } from 'react-router-dom';

const DashboardIcon = (props) => {
    const history = useHistory();
    return (
        <div className='center col s4'>
            <div id={props.id} className='card small hoverable' onClick={() => {
                window.scroll({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
                history.push(`/dashboard/${props.dest}`)
            }}>
                <div className="card-content">
                    <i className="large material-icons">{props.icon}</i>
                    <span className="card-title">{props.title}</span>
                </div>
            </div>
        </div>
    )
}

export default DashboardIcon;