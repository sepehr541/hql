import React, {Fragment } from 'react'
import Rooms from "./Rooms"
import Reservation from './Reservation'
import './TabsContainer.css'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import { openPayment } from '../Actions/action'
// import Room from './Room'



// const TABS = {
//     ROOMS: 1,
//     INFO: 0,
// }
const TabsContainer = (props) => {
    // const [activeTab, setTab] = useState(TABS.ROOMS);
    // const [name ,setName]=useState('')
    // const [phoneNum , setPhoneNum]=useState(null)
    // const [email , setEmail]=useState(null)

    let check_in
    let check_out

    if(props.checkin){
         check_in= props.checkin.toString().slice(4,15);
         check_out=props.checkout.toString().slice(4,15)
    }


    return (
        <Fragment>
            {check_in ? 
            <div> 
                    <span className='resvinfo'>{check_in}-{check_out}</span>
                    <span className='resvinfo'> Adults {props.people}</span>
             </div>   :null}  
            <div id="tabsContainer" className="container">
                <ul id="tabsList">
                    <li className="active"><button className="tablinks btn" onClick={() => {props.openPayment(false) }}>Select Your Room</button></li>
                    <li><button className="tablinks btn" onClick={() => {props.openPayment(true) }}>Fill in Your Information</button></li>
                </ul>
                <div id="tabs">
                    {!props.openPay ? <Rooms /> : <Reservation />}
                </div>
                <div id="tabbuttons">
                </div>
            </div>
        </Fragment>
    )
}



const maptostate=state=>{
    return{
        checkin:state.dates.check_in,
        checkout:state.dates.check_out,
        people:state.dates.people,
        roomNum:state.dates.roomNumber,
        openPay:state.dates.openPayment

    }
}
 const maptoprops=dispatch=>{
     return{
         openPayment:(cond)=>dispatch(openPayment(cond))
     }
 }
export default connect(maptostate,maptoprops)(withRouter(TabsContainer));