import React, { Component, Fragment } from 'react'
import { connect } from "react-redux"
import './Reservation.css'
class Reservation extends Component {

    onSubmit = (event) => {
        event.preventDefault();
    }

    render() {
        console.log(this.props.bedtype);
        return (
            <Fragment>
                <div className="Reservation container">
                    <h1>Booking Details</h1>
                    <form onSubmit={this.onSubmit}>
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
            </Fragment>
        )
    }
}
const maptostate = state => {
    return {
        check_in: state.dates.check_in,
        check_out: state.dates.check_out,
        bedtype:state.bed_price.bedtype,
        price:state.bed_price.price
    }
}

export default connect(maptostate)(Reservation);