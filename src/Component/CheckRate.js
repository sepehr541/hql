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
                <input type="text" placeholder="First name"/>
                <input style={{marginTop:"100px"}} id="adult" placeholder="Adults"/>
             </Fragment>
        )
    }
}

export default CheckRate