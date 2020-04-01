import React, { Fragment } from 'react'
import {connect} from 'react-redux'
import './orderTable.css'
import {withRouter} from 'react-router-dom'
import Spinner from './Spinner/Spinner'



const orderconf= (props)=>{

    console.log(props.end)
    console.log(props.start)
    let table=(
        <Fragment>    
         <Spinner/>
         <p style={{fontWeight:'bold' , left:'45%', position:'absolute'}}>We can't find your order</p>

        </Fragment>
    )
    if(!props.start||!props.end){
        setTimeout(() => {
            props.history.push('/')
        }, 5000);
    }else if(props.start && props.end){
        table=(  
            <Fragment>
                    <table className="zui-table">
        <thead>
            <tr>
                <th>Name</th>
                <th>phone</th>
                <th>email</th>
                <th>start Date</th>
                <th>End Date</th>
                <th>Total Cost</th>
                <th>Reservation ID</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{props.name}</td>
                <td>{props.phone}</td>
                <td>{props.email}</td>
                <td>{props.start.toString().slice(0,10)}</td>
                <td>{props.end.toString().slice(0,10)}</td>
                <td>{props.price}</td>
                <td>{props.resevID}</td>
            </tr>
    
        </tbody>
    </table>
            </Fragment>
    )
    }
    return table

    
}

const maptostate=state=>{
    return{
        name:state.order.name,
        phone:state.order.phone,
        email:state.order.email,
        start:state.order.start,
        end:state.order.end,
        price:state.order.price,
        resevID:state.order.resevID

    }
}


export default withRouter(connect(maptostate)(orderconf));
