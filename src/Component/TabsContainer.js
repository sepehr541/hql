import React, { Fragment, useEffect } from 'react'
import Rooms from "./Rooms"
import Reservation from './Reservation'
import './TabsContainer.css'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { openPayment } from '../Actions/action'
import M from 'materialize-css';

const TabsContainer = (props) => {
    let check_in
    let check_out

    if (props.checkin) {
        check_in = props.checkin.toString().slice(4, 15);
        check_out = props.checkout.toString().slice(4, 15)
    }

    useEffect(() => {
        console.log('useEffect Called');
        var el = document.querySelector(".tabs");
        M.Tabs.init(el, {});
    }, [])

    return (
        <Fragment>
            <div id="tabsContainer" className="container">
                <div id="tabsList" className="row">
                    <div className="col s8">
                        <ul className="tabs">
                            <li className="tab col s3"><a href="#roomsTab">Select Room</a></li>
                            <li id='' className="tab col s3"><a href="#resvTab">Fill in information</a></li>
                        </ul>
                    </div>
                    {check_in ?
                        <div>
                            <div className='resvinfo col s2'><p>{check_in}-{check_out}</p></div>
                            <div className='resvinfo col s1'> <p>Adults {props.people}</p></div>
                        </div>
                        : null}
                </div>
                <div id="roomsTab" class="col s12"><Rooms /></div>
                <div id="resvTab" class="col s12"><Reservation /></div>
            </div>
        </Fragment>
    )
}

const maptostate = state => {
    return {
        checkin: state.dates.check_in,
        checkout: state.dates.check_out,
        people: state.dates.people,
        roomNum: state.dates.roomNumber,
        openPay: state.dates.openPayment

    }
}
const maptoprops = dispatch => {
    return {
        openPayment: (cond) => dispatch(openPayment(cond))
    }
}
export default connect(maptostate, maptoprops)(withRouter(TabsContainer));