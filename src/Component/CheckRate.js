import React, { Component, Fragment } from 'react'
import "./Checkrate.css"
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { connect } from "react-redux"
import { gettingdate  } from "../Actions/action"
import { withRouter } from 'react-router-dom'
import 'react-dates/initialize'
import './react_dates_overrides.css';


class CheckRate extends Component {

        state = {
            startDate: null,
            endDate: null,
            focusedInput: null,
            visible: true,
            people:null,
            sending:false
        };
    


    handleChange = (event) => {
        this.setState({
            value: event.target.value,
        })
       

    }

    handleSubmit = () => {
        this.setState(prev => ({
            visible: !prev.visible,
            sending:true
        })
        )
        
        this.props.send_dates(this.state.startDate._d,this.state.endDate._d,this.state.people)        
        this.props.history.push("/Rooms")

    }
    // onSelect = (dates) => {
    //     console.log(dates);
    //     let nums = document.getElementById("nums").value
    //     this.props.send_dates(dates.start._d, dates.end._d, nums)

    // }

    get_people=(e)=>{
        let people=e.target.value
        this.setState({
            people:people
        })
        // console.log(this.state.people);
    }



    render() {
        let show = null
        if (this.state.visible) {
            show = (
                <Fragment>
                    <div >
                        <form className="check" onSubmit={this.handleSubmit}>
                            <ul>
                                <li><input name="number" onChange={(e)=>this.get_people(e)} id="nums" type="text" placeholder="Number of Adults" /></li>
                                <li id="date-picker">
                                    <DateRangePicker
                                        startDateId="startDate"
                                        endDateId="endDate"
                                        startDate={this.state.startDate}
                                        endDate={this.state.endDate}
                                        onDatesChange={({ startDate, endDate }) => {
                                            this.setState({ startDate, endDate })}}
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
        send_dates: (start, end,people) => dispatch(gettingdate(start, end,people)),
    }
}


export default connect(maptostate, maptoprops)(withRouter(CheckRate));