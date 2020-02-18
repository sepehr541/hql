import React, { Component, Fragment } from 'react'
import "./Checkrate.css"
import DateRangePicker from 'react-daterange-picker'
import 'react-daterange-picker/dist/css/react-calendar.css'
class CheckRate extends Component {
    // constructor(props) {
    //     super(props);
    // }

    state = {
        value: '',
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

    }
    

    render() {
            
        return (
<<<<<<< HEAD
            <Fragment>
                    <div className="CheckRate">
                        <ul>
                            <div>
                            <input className="box" type="text" placeholder="Number of Adults"/>
                            <DateRangePicker onClick={} />
                            </div>
                        
                            <button onClick={this.handleSubmit}>Check</button>
                        </ul>
                    </div>
                </Fragment>
        )
    }
}

export default CheckRate