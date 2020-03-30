import React, { useState } from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import axios from 'axios';
import './Login.css';
import {withRouter} from 'react-router-dom'
const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const resp = await axios.post('http://localhost:9000/api/login', { username, password });
            localStorage.setItem('token', resp.data);
            history.push('/dashboard')
        } catch (error) {
            if (error.response.data === 'USER') {
                document.querySelector('#user').classList.add('invalid');
            } else {
                document.querySelector('#pass').classList.add('invalid');
            }
        }

    }

    var ForgotPassword=()=>{
        if(username===''|| password==='')return alert ('please fill out the username and password input to change your password')
        

    }

    return (
        <div id='Login' className='row container valign-wrapper center-align'>
            <form className="col s12">
                <div className='row'>
                    <div className='input-field col s4'>
                        <label htmlFor='user'>Username</label>
                        <input type="text" id='user' onChange={(e) => { setUsername(e.target.value) }}></input>
                    </div>
                </div>
                <div className='row'>
                    <div className='input-field col s4'>
                        <label htmlFor='pass'>Password</label>
                        <input type='password' id='pass' onChange={(e) => { setPassword(e.target.value) }}></input>
                    </div>
                </div>
                <div className='row'>
                    <button className='btn col s4' onClick={handleSubmit}>Login</button>
                </div>
                <div>
                    <button className="forgot">           
                        Forgot your password?
                    </button>
                </div>
            </form>
        </div>
    )
}

export default withRouter(Login)