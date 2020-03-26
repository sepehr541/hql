import React, { Component, Fragment } from 'react'
import { connect } from "react-redux"
import {withRouter} from "react-router-dom"
import './Reservation.css'
import * as qs from 'query-string';
import {finalResv} from "../Actions/action"
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

    onSubmit = (event) => {
        console.log("kos");
        let roomNumber=parseInt(qs.parse(this.props.location.search).rn);
        this.props.SendingFinalResv(this.props.check_in, this.props.check_out, this.props.people, roomNumber)
        this.props.history.push("/")

    }

    

    render() {
        return (
            <Fragment>
                {this.state.Modal ?
                <Modal style={{top:'300px'}} show={this.state.Modal} close={this.closeModal}  >Your reservation is beiong confirmed once its confirmed you will be redirected to the main page</Modal>:null }
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
                <button className="button" onClick={this.onSubmit}>Confirm your payment</button>

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

export default connect(mapStateToProps)(Reservation);
