import React, { useState, Fragment } from 'react';
import { useHistory ,withRouter } from 'react-router-dom';
import axios from 'axios';
import './Login.css';
// import {withRouter} from 'react-router-dom'
import Modal from '../Modal/Modal'
import {connect} from 'react-redux'
import {LogginIn} from '../../Actions/action'
const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [modal ,setmodal]=useState(false)
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const resp=  await axios.post('/api/login', { username, password });
            localStorage.setItem('token', resp.data);
            props.gettingUser(username,password)
            history.push('/dashboard')
        } catch (error) {
            if (error.response.data === 'USER') {
                document.querySelector('#user').classList.add('invalid');
            } else {
                document.querySelector('#pass').classList.add('invalid');
            }
        }   

    }
    var forgotPassword=async()=>{
        console.log(username , password)
        if(!username || !password) return alert('Please fill out the inputs to change your password')
        try{
            let obj={username:username, password:password}
            const response= await axios.post('/api/login/forgotPassword', obj)
            console.log(response.data)
            setTimeout(() => {
                props.history.push('/')
            }, 3000);
            return setmodal(true)

        }catch(e){
            if(e.response.data==='no user found'){
                document.querySelector('#user').classList.add('invalid');

            }else{
                document.querySelector('#user').classList.add('invalid');
                document.querySelector('#pass').classList.add('invalid');
            }
        }
    }
    return (
        <Fragment>
            <div id='Login' className='row container valign-wrapper center-align'>
            {modal ? <Modal  show={Modal}>Password has changed sucessfully, you will be directed to the main page </Modal>:null}

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
                  
                </div>
            </form>
            <button className="forgot" onClick={forgotPassword}>
             Forgot password ?
            </button>
        </div>  
        </Fragment>
        
    )
}

const maptoprops=dispatch=>{
    return{
        gettingUser:(user,password)=>dispatch(LogginIn(user,password))
    }
}

export default  connect(null, maptoprops)(withRouter(Login));