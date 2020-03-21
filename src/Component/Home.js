import React, { Fragment  } from 'react'
import "./video.css"
import Video from "../../src/vancouver.mp4"
import van from './PosterPic.jpg'

const Home = (props) => {
  

  
  return (

    <Fragment style={{position:"relative"}}>
          <div className="vidcontain">
      <video playsinline="playsinline"  controls poster={van}    muted="muted" loop="loop">
        <source src={Video} type="video/mp4"/>
      </video>
    </div>

    <div>
    <h1 style={{position:"relative", fontSize:"40px", color:"white" , marginTop:"28%", marginLeft:"42%"}}> Welcome to HQL
      <h1 style={{marginLeft: "90px", marginTop:"-20px"}}> ____</h1>
      </h1>
  </div>

  


    </Fragment>
    

  )
}

export default Home