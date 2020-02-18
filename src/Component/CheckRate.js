import React, { Component, Fragment } from 'react'
import "./Checkrate.css"

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
      <input style={{marginTop:"100px"}} type="text" class="form-control" placeholder="First name"/>
    </div>
    <div class="col">
      <input style={{marginTop:"100px"}} type="text" class="form-control" placeholder="Last name"/>
    </div>
  </div>
</form>
             </Fragment>
        )
    }
}

export default CheckRate