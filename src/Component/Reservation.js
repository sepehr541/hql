import React, { Component, Fragment } from 'react'
import { connect } from "react-redux"
import './Reservation.css'
import axios from 'axios'
import Modal from './Modal/Modal'
import {withRouter} from 'react-router-dom'
class Reservation extends Component {
    // const [name ,setName]=useState('')
    // const [phoneNum , setPhoneNum]=useState(null)
    // const [email , setEmail]=useState(null)
   state={
       name:null,
       phone:null,
       email:null,
       confirmEmail:null,
       Modal:false
   }



   gettingname=(e)=>{
       this.setState(({
           name:e.target.value
       }))
   }

   gettingPhone=(e)=>{
       console.log(e.target.value)
       this.setState(({
           phone:e.target.value
       }))
   }
       
   gettingEmail=(e)=>{
       console.log(e.target.value)
       this.setState(({
           email:e.target.value
       }))

   } 

   gettingconfirmedEmail=(e)=>{
       console.log(e.target.value)
       this.setState(({
           confirmEmail:e.target.value
       }))
   }

    dateFormatter = (date) => {
    if(date){
        return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
    }
    return
}


    gettingPersonalInfo=()=>{
        if(!this.state.name || !this.state.phone || !this.state.email){
            return alert('please check your input to make sure they are correct ')
        }
        console.log(this.state.email)
        console.log(this.state.confirmEmail)
        
        if(this.state.email!==this.state.confirmEmail)return alert('Your emails dont match')
        //im gonna send as an object but if u want u can put it the url , i figured the url would be too long so this way it would look better
        this.openModal()
        let obj={
            start:this.props.start, 
            end:this.props.end, 
            people:this.props.people,
            roomid:this.props.roomNum, 
            name:this.state.name, 
            phone:this.state.phone,
            email:this.state.email
          }
          console.log(obj)
        axios.post(`http://localhost:9000/Reservation`,obj)
        .then(resp=>{console.log(resp.data)})
    
    //  setTimeout(() => {
    //      this.closeModal()
    //      this.props.history.push('/')
    //  }, 2000);
    }





    openModal=()=>{
        this.setState(({
            Modal:true
        }))
    }

    closeModal=()=>{
        console.log('dasadds')
        this.setState(({
            Modal:false
        }))
    }

    render() {
        return (
            <Fragment>
                {this.state.Modal ?
                <Modal  show={this.state.Modal}  >Your reservation is beiong confirmed once its confirmed you will be redirected to the main page</Modal>:null }
                <div className="Reservation">
                    <h1>Booking Details</h1>
                    <form>
                        <div className="row">
                            <div className="col s6">
                            <h2 style={{fontWeight:'bold', fontSize:'large'}}>Guest Details</h2>


                                <input onChange={(e)=>this.gettingname(e)} type="text" id="name"></input>
                                <label style={{top:'20px'}} htmlFor="name">Full Name</label>


                                <input type='text' onChange={(e)=>this.gettingPhone(e)} maxLength='11'  id="phone"></input>
                          

                                <label htmlFor="phone">Phone number</label>
                                
                                <input pattern='^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$' onChange={(e)=>this.gettingEmail(e)} type="text" id="email"></input>
                                <label htmlFor="email">Email</label>
                                
                                <input onChange={(e)=>this.gettingconfirmedEmail(e)} pattern='^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$' type="text" id="confirmEmail"></input>
                                <label  htmlFor="confirmEmail">Confirm Email</label>
                            </div>
                            <div className="col s6"> 
                                <h2>Paymen Details</h2>
                                <label htmlFor="creditCard">Credit Card Number</label>
                                <input type="text" id="creditCard"></input>
                                <label htmlFor="creditExp">Expiary Date</label>
                                <input type="text" id="creditExp" maxLength="4"></input>
                                <label htmlFor="creditCvv">CVV</label>
                                <input type="text" id="creditCVV" maxLength="4"></input>
                            </div>
                        </div>
                    </form>
                    <button className='submit' onClick={this.gettingPersonalInfo}>Submit your payment</button>
                </div>
            </Fragment>
        )
    }
}
const mapStateToProps = state => {
    return {
        start: state.dates.check_in,
        end: state.dates.check_out,
        people:state.dates.people,
        roomNum:state.dates.roomNumber
    }
}



export default withRouter( connect(mapStateToProps)(Reservation));