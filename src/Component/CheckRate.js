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
            <Fragment>
                    <div className="CheckRate">
                        <ul>
                            <div>
                            <input className="box" type="text" placeholder="Number of Adults"/>
                            <input className="box" type="text" placeholder="Check-in and Check-out"/>
                            </div>
                        
                            <button onClick={this.handleSubmit}>Check</button>
                        </ul>
                    </div>
                </Fragment>
        )
    }
}

export default CheckRate