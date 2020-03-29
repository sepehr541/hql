import React, { useState, Fragment } from 'react'
import './orderconf.css'
import {withRouter} from 'react-router-dom'
import Axios from 'axios'
import {connect} from 'react-redux'
import {SendingOrderResultsToRedux} from "./Actions/action"



const OrderConfirmation=(props)=>{
const [orderconf, setOrderConf]= useState(null)

var gettingOrderConf=(e)=>{
        setOrderConf(e.target.value)
    
}

var sendingToBack=async()=>{
    console.log(orderconf)
    const resp= await Axios.post('http://localhost:9000/api/orderconf',{orderNum:orderconf})
    const results=await resp.data
    let result=results[0]
    console.log(result)
    const name=await result.name
    const phone= await result.phone
    const email= await result.email
    const start = await result.startdate
    const end = await result.enddate
    const price= await result.price
    const resevID= await result.reservationid
    props.gettingTheResults(name,phone,email,start,end,price,resevID)    
    props.history.push(`/orderconfirmation/${orderconf}`)

}

    return(
        <Fragment>
            <div className="amir">
                 <input onChange={(e)=>gettingOrderConf(e)} type="text" placeholder="Order Confirmation..." />
                 <div className="search"></div>
                 <button className='button' style={{top:'100px' ,position:'relative', left:'30px'}} onClick={sendingToBack}>press to see your order</button>
            </div>
        </Fragment>
    )
}


const maptoprops=dispatch=>{
    return{
        gettingTheResults:(name , phone ,email,start,end, price,resevID)=>dispatch(SendingOrderResultsToRedux(name,phone,email,start,end,price,resevID))
    }
}



export default connect(null,maptoprops)(withRouter(OrderConfirmation));