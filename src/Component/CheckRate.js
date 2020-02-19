import React, { Component, Fragment } from 'react'
import "./Checkrate.css"
import DateRangePicker from 'react-daterange-picker'
import 'react-daterange-picker/dist/css/react-calendar.css'
import {connect} from "react-redux"
import {gettingdate} from "../Actions/action"
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
        this.props.send_dates(dates.start._d,dates.end._d)

    }


    render() {

        return (

            <Fragment>
                    <div >
                        <form className="check">
                            <input name="number"   style={{marginTop:"50px"}}  type="text" placeholder="Number of Adults"/>
                        </form>
                        <form className="check2">
                        <input name="date" type="text" placeholder="Check-in and check-out"/>

                        </form>

                            <DateRangePicker onSelect={this.onSelect} />

                            <button onClick={this.handleSubmit}>Check</button>
                    </div>
                </Fragment>
        )
    }
}

const maptoprops=dispatch=>{
    return{
        send_dates:(start,end)=>dispatch(gettingdate(start,end))
    }
}

export default connect(null,maptoprops) (CheckRate);