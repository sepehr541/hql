import React, { Fragment } from 'react'
import "./video.css"
// import Video from "../../src/vancouver.mp4"
import van from './PosterPic.jpg'
import Search from '../orderconfirmation'
import toronto from './picfororder.jpg'

const Home = (props) => {



  return (

    <Fragment >
        <div className="vidcontain">
          <video playsInline="playsinline" controls poster={van} autoPlay muted="muted" loop="loop">
            <source  type="video/mp4" />
          </video>

        </div>
        <div>

          <header style={{ position: "relative", fontSize: "40px", color: "white", marginTop: "24%", marginLeft: "42%" }}> Welcome to HQL
      <h2 style={{ marginLeft: "90px", marginTop: "-20px" }}> ____</h2>
          </header>
      </div>
      <div className='striped-border'/>
      <div>
      <h2  style={{position:'absolute' , top:'910px', fontWeight:'bold' , fontSize:'large' , left:'33%'}}>Please type down your order confirmation  number to see your reservation </h2>
      <img style={{position:'relative' ,top:'480px', left:'20px'}} src={toronto} width="500px" height="600px" alt=""/>
        <Search/>
     
      </div>
   
    </Fragment>
  )
}

export default Home