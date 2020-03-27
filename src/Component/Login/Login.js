import React, { useState } from 'react'
import axios from 'axios'
import './Login.css'
const Login = (props) => {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post('http://localhost:9000/api/login', {username: user, password: pass});
        console.log(response.data);
    }

    return (
        <div id='Login' className='row container valign-wrapper center-align'>
            <form class="col s12">
                <div className='row'>
                    <div className='input-field col s4'>
                        <label htmlFor='user'>Username</label>
                        <input type="text" id='user' onChange={(e)=>{setUser(e.target.value)}}></input>
                    </div>
                </div>
                <div className='row'>
                    <div className='input-field col s4'>
                        <label htmlFor='pass'>Password</label>
                        <input type='password' id='pass' onChange={(e)=>{setPass(e.target.value)}}></input>
                    </div>
                </div>
                <div className='row'>
                    <button className='btn col s4' onClick={handleSubmit}>Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login