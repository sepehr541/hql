import React, { Fragment } from 'react'
import "./video.css"
import Video from "../../src/tl.mp4"
import van from './PosterPic.jpg'

const Home = (props) => {
  return (
    <Fragment >
      <div className="vidcontain">
        <video src={Video} className="video-video" playsInline="playsinline" controls poster={van} autoPlay muted="muted">
        </video>
      </div>
      <div>
        <header style={{ position: "relative", fontSize: "40px", color: "white", marginTop: "24%", marginLeft: "42%" }}> Welcome to HQL
      <h2 style={{ marginLeft: "90px", marginTop: "-20px" }}> ____</h2>
        </header>
      </div>
    </Fragment>
  )
}

export default Home