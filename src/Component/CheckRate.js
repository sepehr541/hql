import React, { Component, Fragment } from 'react'
import "./Checkrate.css"
import DateRangePicker from 'react-daterange-picker'
import 'react-daterange-picker/dist/css/react-calendar.css'
import {connect} from "react-redux"
import {gettingdate} from "../Actions/action"
import { withRouter } from 'react-router-dom'
class CheckRate extends Component {

    state={
        visible:true
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState(prev=>({
            visible:!prev.visible
        })
         
        )
        this.props.history.push("/resv")

    }
    
    onSelect = (dates) => {
        console.log(dates);
        let nums=document.getElementById("nums").value
        this.props.send_dates(dates.start._d,dates.end._d,nums)

    }

    


    render() {
        let show=null
        if(this.state.visible){
            show=(
                <Fragment>
                        <div >
                            <form className="check" onSubmit={this.handleSubmit}>
                                <input name="number" id="nums"   style={{marginTop:"50px"}}  type="text" placeholder="Number of Adults" />
                            </form>
                            <form className="check2">
                            <input name="date" type="text" placeholder="Check-in and check-out"  value={this.props.checkin}></input>
    
                            </form>
    
                                <DateRangePicker onSelect={this.onSelect} />
    
                                <button onClick={this.handleSubmit}>Check</button>
                        </div>
                    </Fragment>)
        }

        return (
            show
        )
    }
}

const maptostate=state=>{
    return{
        checkin:state.dates.check_in

    }
}
const maptoprops=dispatch=>{
    return{
        send_dates:(start,end,people)=>dispatch(gettingdate(start,end,people))
    }
}


export default connect(maptostate,maptoprops) (withRouter(CheckRate));