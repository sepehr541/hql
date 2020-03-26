import React, { Fragment, useState, useEffect, useRef } from "react"
import Room from "./Room"
import "./Rooms.css"
import bed from "../2bed.jpeg"
import bed3 from "../3bed.jpeg"
import Spinner from "./Spinner/Spinner"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import axios from "axios"


// let arr = [{ price: 543, bedtype: "2 bed" }, { price: 345, bedtype: "1 bed" }, { price: 649, bedtype: "3 bed" }, { price: 450, bedtype: "2 bed" }]

const Rooms = (props) => {
    // internal state to store rooms
    const [availableRooms, setavailableRooms] = useState([])
    /**
     * Hepler function: Formats date
     */
    var dateFormatter = (date) => {
        if (date) {
            return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
        }
        return;
    }

    // runs when mounting or change of any of props.start, props.end, props.people
    useEffect(() => {
        console.log('effect ran');
        var gettingRooms = async () => {
            // object of response
            const resp = await axios.post(`http://localhost:9000/api/rooms?start=${dateFormatter(props.start)}&end=${dateFormatter(props.end)}&people=${props.people}`)
            // data property will have JSON of rooms
            setavailableRooms(resp.data)
        }
        gettingRooms()
    }, [props.start, props.end, props.people])

    let roomAvailability = null;

    if (availableRooms.length === 0) {
        return (
            <Fragment>
                <div>
                    <Spinner />
                </div>
                <div className="empty" >
                    You are being redirected to the main page because there is no room available to math your request
                    </div>
            </Fragment>
        )
    }

    if (availableRooms && availableRooms.length > 0) {
        roomAvailability = availableRooms.map(x => (
            <Room key={x.roomnumber} id={x.roomnumber} price={x.price} bedtype={x.bedtype} source={x.bedtype === 2 ? bed : bed3} />))
    }
    
    return (
        <div className="Rooms">
            <Fragment>
                {roomAvailability}
            </Fragment>
        </div>
    )
}

const mapStatetoProps = state => {
    return {
        start: state.dates.check_in,
        end: state.dates.check_out,
        people: state.dates.people
    }
}

export default withRouter(connect(mapStatetoProps)(Rooms));
