import React  from 'react'
import "./video.css"
import Video from ""

const Home = (props) => {
    return(
        <div className="Home">
            
            {/* <iframe title="Vancouver" className="video" width="1000" height="500" src="https://www.youtube.com/embed/WbfjRoQVZSw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */} <video width="500" height="300" controls>
  <source src={Video} type="video/mp4"/>
  <p>This browser does not support the video element.</p>
</video>
      
        </div>
    )
}

export default Home