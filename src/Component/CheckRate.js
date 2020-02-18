import React, { Component, Fragment } from 'react'
import "./Checkrate.css"
import DateRangePicker from 'react-daterange-picker'
import 'react-daterange-picker/dist/css/react-calendar.css'
class CheckRate extends Component {
    // constructor(props) {
    //     super(props);
    // }

    state = {
        dates: null,
    }

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
                            <DateRangePicker onSelect={this.onSelect} value={this.state.dates}/>
                            </div>
                        
                            <button onClick={this.handleSubmit}>Check</button>
                        </ul>
                    </div>
                </Fragment>
        )
    }
}

export default CheckRate