import React, { Component, Fragment } from 'react'
import {connect} from "react-redux"

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
const maptostate=state=>{
    return{
        check_in:state.dates.check_in,
        check_out:state.dates.check_out
    }
}

export default connect(maptostate) (Reservation);