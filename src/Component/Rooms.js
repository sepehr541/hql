import React, { Fragment } from "react"
import Room from "./Room"

let arr=[{price:543,bedtype:"2 bed"},{price:345,bedtype:"1 bed"},{price:649,bedtype:"3 bed"},{price:450,bedtype:"2 bed"}]

const Rooms=(props)=>{

    return(

        <Fragment>
            {arr.map(x=>(
                <Room price={x.price} bedtype={x.bedtype}/>
            ))}
        </Fragment>
     
    )
}

export default Rooms