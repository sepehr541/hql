import React, { Fragment, useState, useEffect } from "react"
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
const [availableRooms , setavailableRooms]=useState([])



/**
 * Formats date
 */
var dateFormatter = (date) => {
    if(date){
        return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
    }
    return
}


useEffect(()=>{
    var gettingRooms=async()=>{
        if(!props.start || !props.end||!props.people) return alert ('one of the required fill is empty')
        console.log('noooo')
       const resp= await axios.post(`http://localhost:9000/api/rooms?start=${dateFormatter(props.start)}&end=${dateFormatter(props.end)}&people=${props.people}`)
       const resp1=await resp.data
       setavailableRooms(resp1)
    }
    gettingRooms()


    // eslint-disable-next-line
},[props.start,props.end,props.people])


let roomAvailability=null

    //   if(notRun.current){
    //         notRun.current=false
    //         return null
    //     }else{
            if (availableRooms.length===0) {
                roomAvailability = (
                    <Fragment>
                        <div>
                            <Spinner />
                        </div>
                        <div className="empty" >
                            You are being redirected to the main page because there is no room available to math your request
                        </div>
                    </Fragment>)
            
                // setTimeout(() => {
        
                //     props.history.replace("/")
                // }, 4000);
            }
        // }

  
    if (availableRooms && availableRooms.length > 0) {
        console.log(availableRooms)
        roomAvailability = availableRooms.map(x => (
            <Room key={x.roomnumber}  id={x.roomnumber} price={x.price} bedtype={x.bedtype} source={x.bedtype === 2 ? bed : bed3} />))
        }
    return (
        <div className="Rooms">
            <Fragment>
                {roomAvailability}
            </Fragment>
        </div>
    )
}

const maptostate = state => {
    return {
        start:state.dates.check_in,
        end:state.dates.check_out,
        people:state.dates.people
    }
}



export default withRouter(connect(maptostate)(Rooms));
