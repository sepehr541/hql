import React from 'react';
import './Unauthorized.css'
const Unauthorized = (props) => {
    return (
        <div id='authFailed' className='center'>
            <i className='large material-icons'>error_outline</i>
            <h2>403: Unauthorized Access</h2>
            <h3>try to <a href='/login'>login</a></h3>
        </div>
    )
}

export default Unauthorized;