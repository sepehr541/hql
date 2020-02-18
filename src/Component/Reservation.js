import React, { Component, Fragment } from 'react'

class Reservation extends Component {

    render() {
        return (
            <Fragment>
                <div className="Reservation">
                    <form>
                        <label for="name">Full Name</label>
                        <input type="text" id="name"></input>
                        <label for="phone">Phone number</label>
                        <input type="text" id="phone"></input>
                    </form>
                </div>
            </Fragment>
        )
    }
}

export default Reservation