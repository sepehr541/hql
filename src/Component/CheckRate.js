import React, { Component, Fragment } from 'react'
import "./Checkrate.css"
import DateRangePicker from 'react-daterange-picker'
import 'react-daterange-picker/dist/css/react-calendar.css'
import {connect} from "react-redux"
import reducer1 from "../Reducers/reducer1"
import {gettingdate} from "../Actions/action"
class CheckRate extends Component {
    // constructor(props) {
    //     super(props);
    // }

  

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

    }


    render() {
            
        return (

            <Fragment>
                    <div className="CheckRate">
                        <ul>
                            <div>
                            <input className="box" type="text" placeholder="Number of Adults"/>
                            <DateRangePicker onSelect={this.onSelect} />
                            </div>
                        
                            <button onClick={this.handleSubmit}>Check</button>
                        </ul>
                    </div>
                </Fragment>
        )
    }
}

const maptoprops=dispatch=>{
    return{
        recieve_dates:(start,end)=>dispatch(gettingdate(start,end))
    }
}

export default  (CheckRate);