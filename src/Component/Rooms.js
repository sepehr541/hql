import React, { Fragment } from "react"
import Room from "./Room"
import "./Rooms.css"
import bed from "../2bed.jpeg"
import bed3 from "../3bed.jpeg"


let arr = [{ price: 543, bedtype: "2 bed" }, { price: 345, bedtype: "1 bed" }, { price: 649, bedtype: "3 bed" }, { price: 450, bedtype: "2 bed" }]

const Rooms = (props) => {

    return (
        <div className="Rooms">

            <Fragment>
                <header style={{ marginTop: "100px", position: "relative", fontWeight: "bold", color: "white", marginLeft: "48%" }}>Suits</header>
                {arr.map(x => (
                    <Room price={x.price} bedtype={x.bedtype} source={x.bedtype === "2 bed" ? bed : bed3} />
                ))}
            </Fragment>
        </div>
    )
}

export default Rooms