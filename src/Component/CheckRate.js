import React, { Component, Fragment } from 'react'
import "./Checkrate.css"
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { connect } from "react-redux"
import { gettingdate } from "../Actions/action"
import { withRouter } from 'react-router-dom'
import 'react-dates/initialize'


class CheckRate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: null,
            endDate: null,
            focusedInput: null,
            visible: true,
        };
    }


    handleChange = (event) => {
        this.setState({
            value: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState(prev => ({
            visible: !prev.visible
        })

        )
        //this.props.history.push("/resv")

    }

    // onSelect = (dates) => {
    //     console.log(dates);
    //     let nums = document.getElementById("nums").value
    //     this.props.send_dates(dates.start._d, dates.end._d, nums)

    // }



    render() {
        let show = null
        if (this.state.visible) {
            show = (
                <Fragment>
                    <div >
                        <form className="check" onSubmit={this.handleSubmit}>
                            <ul>
                                <li><input name="number" id="nums" type="text" placeholder="Number of Adults" /></li>
                                <li id="date-picker">
                                    <DateRangePicker
                                        startDateId="startDate"
                                        endDateId="endDate"
                                        startDate={this.state.startDate}
                                        endDate={this.state.endDate}
                                        onDatesChange={({ startDate, endDate }) => { this.setState({ startDate, endDate }) }}
                                        focusedInput={this.state.focusedInput}
                                        onFocusChange={(focusedInput) => { this.setState({ focusedInput }) }}
                                    />
                                </li>
                                <li><button onClick={this.handleSubmit}>Check</button></li>
                            </ul>
                        </form>
                    </div>
                </Fragment>
            )
        }

        return (
            show
        )
    }
}

const maptostate = state => {
    return {
        checkin: state.dates.check_in

    }
}
const maptoprops = dispatch => {
    return {
        send_dates: (start, end, people) => dispatch(gettingdate(start, end, people))
    }
}


export default connect(maptostate, maptoprops)(withRouter(CheckRate));