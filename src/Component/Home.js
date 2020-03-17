import React  from 'react'
import "./video.css"


const Home = (props) => {
  return(
    <div   >
    
        {/* <iframe width="1000" height="678" src="https://www.youtube.com/embed/WbfjRoQVZSw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
       
        <video  preload  className="video" loop controls>
            <source type="video/mp4"/>
            
         </video>

 
    </div>
)

}

export default Home