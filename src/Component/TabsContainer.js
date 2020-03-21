import React, { useState } from 'react'
import Rooms from "./Rooms"
import Reservation from './Reservation'
import './TabsContainer.css'

const TABS = {
    ROOMS: 1,
    INFO: 0,
}
const TabsContainer = (props) => {
    const [activeTab, setTab] = useState(TABS.ROOMS);
    return (
        <div id="tabsContainer" className="container">
            <ul id="tabsList">
                <li class="active"><button className="tablinks btn" onClick={() => { setTab(TABS.ROOMS) }}>Select Your Room</button></li>
                <li><button className="tablinks btn" onClick={() => { setTab(TABS.INFO) }}>Fill in Your Information</button></li>
            </ul>
            <div id="tabs">
                {activeTab ? <Rooms /> : <Reservation />}
            </div>
            <div id="tabbuttons">
                {activeTab ? <button onClick={() => { setTab(TABS.INFO) }}>Next</button> : <button>Submit</button> }
            </div>
        </div>
    )
}

export default TabsContainer