import React, { useState, Fragment } from 'react'
import './orderconf.css'
import {withRouter} from 'react-router-dom'
import Axios from 'axios'
import { connect } from 'react-redux'
import {SendingOrderResultsToRedux} from '../../Actions/action'



const OrderConfirmation=(props)=>{
const [orderconf, setOrderConf]= useState(null)

var gettingOrderConf=(e)=>{
        setOrderConf(e.target.value)
    
}

var sendingToBack=async()=>{
    console.log(orderconf)
    const resp= await Axios.post('/api/orderconf',{orderNum:orderconf})
    const results=await resp.data    
    props.sendingOrder(results.visitorname, results.email , results.phone, results.reservationid , results.startdate , results.enddate, results.price)
    props.history.push(`/orderconfirmation/${orderconf}`)

}

    return(
        <Fragment>
            <div className="amir">
                 <input style={{top:'-28px',height:'73px'}}  onChange={(e)=>gettingOrderConf(e)} type="text" placeholder="Order Confirmation..." />
                 <div className="search"></div>
                 <button className='button' style={{top:'100px' ,position:'relative', left:'30px'}} onClick={sendingToBack}>press to see your order</button>
            </div>
        </Fragment>
    )
}

const maptoprops=dispatch=>{
    return{
        sendingOrder:(name,email,phone,reservationid,startdate,enddate,price)=>dispatch(SendingOrderResultsToRedux(name,email,phone,reservationid,startdate,enddate,price))
    }
}


export default connect(null ,maptoprops)(withRouter(OrderConfirmation));