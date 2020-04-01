import React, { Component, Fragment } from 'react'
import { connect } from "react-redux"
import './Reservation.css'
import axios from 'axios'
import Modal from './Modal/Modal'
import { withRouter } from 'react-router-dom'
class Reservation extends Component {

    state = {
        name: null,
        phone: null,
        email: null,
        confirmEmail: null,
        Modal: false,
        orderconf:null
    }

    onChange = (e) => {
        this.setState(({
            [e.target.id]: e.target.value
        }))

    }

    dateFormatter = (date) => {
        if (date) {
            return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
        }
        return
    }


    gettingTotalPrice=(p)=>{
       let lengthOfStay = (this.props.end.getTime() - this.props.start.getTime())/(1000*60*60*24)
       let people=parseInt(p)
       if(people===1) return lengthOfStay*300
       if(people===2)return lengthOfStay*450
       if(people===3)return lengthOfStay*600


    }


    gettingPersonalInfo = () => {
        if (!this.state.name || !this.state.phone || !this.state.email) {
            return alert('please check your input to make sure they are correct ')
        }
        console.log(this.state.email)
        console.log(this.state.confirmEmail)

        if (this.state.email !== this.state.confirmEmail) return alert('Your emails dont match')
        //im gonna send as an object but if u want u can put it the url , i figured the url would be too long so this way it would look better
        this.openModal()
        let obj = {
            start: this.props.start,
            end: this.props.end,
            people: parseInt( this.props.people),
            roomid: this.props.roomNum,
            name: this.state.name,
            phone: this.state.phone,
            email: this.state.email,
            totalPrice:this.gettingTotalPrice(this.props.people)
          
        }
        console.log(obj)
        // setTimeout(() => {
        //         this.props.history.push('/')
        // }, 10000);
            axios.post(`/Reservation`, obj)
            .then(resp=>{
                console.log(resp.data)
                setTimeout(() => {
                    this.setState({
                        orderconf:resp.data.answers
                    })
                    setTimeout(() => {
                        this.props.history.push('/')
                    }, 10000);
                }, 7000);
                
            })
          
    
}
   

    openModal = () => {
        this.setState(({
            Modal: true
        }))
    }

    closeModal = () => {
        console.log('dasadds')
        this.setState(({
            Modal: false
        }))
    }


    render() {
        // console.log(this.start.orderconf)
        let text=null
        console.log(this.state.orderconf)
        if(this.state.orderconf){
            text=(
            <Modal show={this.state.Modal}>{this.state.orderconf}</Modal>
                )
        }else{
            text=(
                <Modal show={this.state.Modal} >Your reservation is being confirmed once its confirmed you will see your order confirmation id</Modal>
            )
        }
       
        console.log(this.state);
        return (
            <Fragment>
                {this.state.Modal ?
                              text  : null}
                <div className="Reservation">
                    <h1>Booking Details</h1>
                    <form>
                        <div className="row">
                            <div className="col s6">
                                <h2>Guest Details</h2>

                                <input onChange={this.onChange} type="text" id="name"></input>
                                <label style={{ top: '20px' }} htmlFor="name">Full Name</label>

                                <input type='text' onChange={this.onChange} maxLength='11' id="phone"></input>
                                <label htmlFor="phone">Phone number</label>

                                <input pattern='^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$' onChange={this.onChange} type="text" id="email"></input>
                                <label htmlFor="email">Email</label>

                                <input onChange={this.onChange} pattern='^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$' type="text" id="confirmEmail"></input>
                                <label htmlFor="confirmEmail">Confirm Email</label>
                            </div>
                            <div className="col s6">
                                <h2>Paymen Details</h2>
                                <input type="text" id="creditCard"></input>
                                <label htmlFor="creditCard">Credit Card Number</label>
                                <input type="text" id="creditExp" maxLength="4"></input>
                                <label htmlFor="creditExp">Expiary Date</label>
                                <input type="text" id="creditCVV" maxLength="4"></input>
                                <label htmlFor="creditCvv">CVV</label>
                            </div>
                        </div>
                    </form>
                    <button className='submit' onClick={this.gettingPersonalInfo}>Submit your payment</button>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        start: state.dates.check_in,
        end: state.dates.check_out,
        people: state.dates.people,
        roomNum: state.dates.roomNumber
    }
}



export default withRouter(connect(mapStateToProps)(Reservation));