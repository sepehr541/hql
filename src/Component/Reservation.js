import React, { Component, Fragment } from 'react'
import { connect } from "react-redux"
import {withRouter} from "react-router-dom"
import './Reservation.css'
import * as qs from 'query-string';
import {finalResv} from "../Actions/action"
class Reservation extends Component {

    onSubmit = (event) => {
        console.log("kos");
        let roomNumber=parseInt(qs.parse(this.props.location.search).rn);
        this.props.SendingFinalResv(this.props.check_in, this.props.check_out, this.props.people, roomNumber)
        this.props.history.push("/")

    }

    

    render() {
        return (
            <Fragment>
                <div className="Reservation">
                    <h1>Booking Details</h1>
                    <form >
                        <h2>Guest Details</h2>
                        <label for="name">Full Name</label>
                        <input type="text" id="name"></input>
                        <label for="phone">Phone number</label>
                        <input type="text" id="phone"></input>
                        <label for="email">Email</label>
                        <input type="text" id="email"></input>
                        <label for="confirmEmail">Confirm Email</label>
                        <input type="text" id="confirmEmail"></input>
                        <h2>Paymen Details</h2>
                        <label for="creditCard">Credit Card Number</label>
                        <input type="text" id="creditCard"></input>
                        <label for="creditExp">Expiary Date</label>
                        <input type="text" id="creditExp" maxlength="4"></input>
                        <label for="creditCvv">CVV</label>
                        <input type="text" id="creditCVV" maxlength="4"></input>
                    </form>
                </div>
                <button className="button" onClick={this.onSubmit}>Confirm your payment</button>

            </Fragment>
        )
    }
}
const maptostate = state => {
    return {
        check_in: state.dates.check_in,
        check_out: state.dates.check_out,
        people: state.dates.people
    }
}

const maptoprops=dispatch=>{
    return{
        SendingFinalResv:(check_in, check_out, people, roomNumber)=>dispatch(finalResv(check_in, check_out, people, roomNumber))
    }
}

export default withRouter(connect(maptostate, maptoprops)(Reservation));