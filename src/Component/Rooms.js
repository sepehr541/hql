import React, { Fragment, useState, useEffect } from "react"
import Room from "./Room"
import "./Rooms.css"
import bed from "../bed3.jpg"
import bed3 from '../bedKing.jpg'
import bed4 from '../bed4.jpg'
import bed5 from '../bed5.jpg'
import Spinner from "./Spinner/Spinner"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import axios from "axios"
// let arr = [{ price: 543, bedtype: "2 bed" }, { price: 345, bedtype: "1 bed" }, { price: 649, bedtype: "3 bed" }, { price: 450, bedtype: "2 bed" }]

const Rooms = (props) => {
    const [availableRooms, setavailableRooms] = useState([])

    /**
     * Formats date
     */
    var dateFormatter = (date) => {
        if (date) {
            return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
        }
        return
    }
    // runs when mounting or change of any of props.start, props.end, props.people
    useEffect(() => {
        var gettingRooms = async () => {
            // object of response
            setavailableRooms(null)
            const resp = await axios.post(`/api/rooms?start=${dateFormatter(props.start)}&end=${dateFormatter(props.end)}&people=${props.people}`)
            // data property will have JSON of rooms
            setavailableRooms(resp.data)
            console.log(resp.data);

        }
        gettingRooms()
    }, [props.start, props.end, props.people])

    let roomAvailability = null;

    if (!props.start || !props.end || !props.people) {
        roomAvailability = (
            <div className='row center'>
                <div className='col s12'>
                    <h3>
                        You have not provided details of your stay!
                </h3>
                    <h4>
                        Please do so by using the checkrate button on the top-right corner
                </h4>
                </div>
            </div>
        )
    } else if (!availableRooms || availableRooms.length === 0) {
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
    } else if (availableRooms && availableRooms.length > 0) {
        console.log(availableRooms)
        roomAvailability = availableRooms.map(x => (
            <Room key={x.roomnumber} id={x.roomnumber} price={x.price} bedtype={x.bedtype} source={x.bedtype === "Single" ? bed : (x.bedtype === 'King'? bed4: ( x.bedtype=== 'Queen'? bed3 : bed5))} />))
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
