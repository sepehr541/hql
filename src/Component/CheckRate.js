import React, { Component, Fragment } from 'react'
import "./Checkrate.css"
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { connect } from "react-redux"
import { gettingdate } from "../Actions/action"
import { withRouter } from 'react-router-dom'
import 'react-dates/initialize'
import './react_dates_overrides.css';


class CheckRate extends Component {

    state = {
        startDate: null,
        endDate: null,
        focusedInput: null,
        visible: true,
        people: null,
        sending: false
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState(prev => ({
            visible: !prev.visible,
            sending: true
        }))
        if (!this.state.startDate || !this.state.endDate || !this.state.people) {
            alert("Please fill the required forms in order to continue")
        } else {
            this.props.send_dates(this.state.startDate._d, this.state.endDate._d, this.state.people)
            this.props.history.push("/Rooms")
        }
    }

    get_people = (e) => {
        this.setState({
            people: e.target.value
        })
    }

    render() {
        let show = null;
        if (this.state.visible) {
            show = (
                <Fragment>
                    <div >
                        <form className="check" onSubmit={this.handleSubmit}>
                            <ul>
                                <li><input name="number" onChange={(e) => this.get_people(e)} id="nums" type="text" placeholder="Number of Adults" /></li>
                                <li id="date-picker">
                                    <DateRangePicker
                                        startDateId="startDate"
                                        endDateId="endDate"
                                        startDate={this.state.startDate}
                                        endDate={this.state.endDate}
                                        onDatesChange={({ startDate, endDate }) => {
                                            this.setState({ startDate, endDate })
                                        }}
                                        focusedInput={this.state.focusedInput}
                                        onFocusChange={(focusedInput) => { this.setState({ focusedInput }) }}
                                        horizontalMargin={1000}
                                    />
                                </li>
                                <li><button onClick={this.handleSubmit} className="btn">Check</button></li>
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
        checkin: state.dates.check_in,
        checkout: state.dates.check_out
    }
}
const maptoprops = dispatch => {
    return {
        send_dates: (start, end, people) => dispatch(gettingdate(start, end, people)),
    }
}


export default withRouter(connect(maptostate, maptoprops)(CheckRate));
