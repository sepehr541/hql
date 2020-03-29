import React from 'react'
import {connect} from 'react-redux'



const orderconf= (props)=>{
    console.log(props.name)

    return(
        <div style={{top:'500px', position:'relative'}}>
            {props.name}
        </div>
    )
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


export default connect(maptostate)(orderconf);
