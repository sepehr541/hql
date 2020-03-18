import React, { Fragment } from 'react'
import "./video.css"
import Video from "../../src/vancouver.mp4"
import van from './PosterPic.jpg'

const Home = (props) => {



  
  return (

    <Fragment>
      <div className="vidcontain">
        <div className="vid"></div>
  <video playsinline="playsinline" poster={van} controls   autoplay muted="muted" loop="loop">
    <source src={Video} type="video/mp4"/>
  </video>

</div>
<div>
<p style={{position:"relative", color:"red" , marginTop:"1200px"}}>dafadfsdsadasdddddddddddddddsadasdasdasdasdasdasdasdasdasdasdasdasdaad</p>

</div>

  


    </Fragment>
    

  )
}

export default Home