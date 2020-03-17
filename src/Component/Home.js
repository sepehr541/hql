import React from 'react'
import "./video.css"
import Video from "../../src/vancouver.mp4"

const Home = (props) => {
  return (
    <div>
      <video src={Video} className="video" loop controls muted autoplay>
        <source type="video/mp4" />
      </video>
    </div>
  )
}

export default Home