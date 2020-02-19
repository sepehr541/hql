import React, { Component, Fragment } from 'react'
import "./Checkrate.css"
import DateRangePicker from 'react-daterange-picker'
import 'react-daterange-picker/dist/css/react-calendar.css'
import {connect} from "react-redux"
import {gettingdate} from "../Actions/action"
import { withRouter } from 'react-router-dom'
class CheckRate extends Component {

    handleChange = (event) => {
        this.setState({
            value: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

    }
    
    onSelect = (dates) => {
        console.log(dates);
        let nums=document.getElementById("nums").value
        this.props.send_dates(dates.start._d,dates.end._d,nums)

    }

    


    render() {

        return (

            <Fragment>
                    <div >
                        <form className="check" onSubmit={this.handleSubmit}>
                            <input name="number" id="nums"   style={{marginTop:"50px"}}  type="text" placeholder="Number of Adults" />
                        </form>
                        <form className="check2">
                        <input name="date" type="text" placeholder="Check-in and check-out"  value={this.props.cehckin}></input>

                        </form>

                            <DateRangePicker onSelect={this.onSelect} />

                            <button onClick={this.handleSubmit}>Check</button>
                    </div>
                </Fragment>
        )
    }
}

const maptostate=state=>{
    return{
        cehckin:state.dates.check_in
    }
}
const maptoprops=dispatch=>{
    return{
        send_dates:(start,end,people)=>dispatch(gettingdate(start,end,people))
    }
}


export default connect(maptostate,maptoprops) (withRouter(CheckRate));