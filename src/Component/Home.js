import React, { Fragment } from 'react'
import "./video.css"
import Video from "../../src/tl.mp4"
import van from './PosterPic.jpg'
import './Home.css'

const Home = (props) => {
  return (
    <Fragment >
      <div className="vidcontain">
        <video src={Video} className="video-video" playsInline="playsinline" poster={van} loop="loop" autoPlay muted="muted">
        </video>
      </div>
      <div id='welcome'>
        <header style={{ position: "relative", fontSize: "40px", color: "white"}}> Welcome to HQL
      <h2 style={{color: 'white'}}> ____</h2>
        </header>
      </div>
    </Fragment>
  )
}

export default Home