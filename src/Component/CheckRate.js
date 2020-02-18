import React, { Component, Fragment } from 'react'
import "./Checkrate.css"
import  DateRangePicker from "react-daterange-picker"

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
            <Fragment >
            <form>
  <div class="row">
    <div class="col">
      <input style={{marginTop:"100px"}} type="text" class="form-control" placeholder="Check-in and Check-out"/>
      <DateRangePicker/>
    </div>
  
  </div>
</form>
             </Fragment>
        )
    }
}

export default CheckRate