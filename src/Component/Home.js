import React  from 'react'
import "./video.css"
//import Video from "../vancouver.mp4"

const Home = (props) => {
    return(
        <div className="Home">
        
            {/* <iframe width="1000" height="678" src="https://www.youtube.com/embed/WbfjRoQVZSw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
           
            <video preload="auto" muted className="video" loop  width="1200" height="700" controls>
                <source type="video/mp4"/>
                
             </video>
   
     
        </div>
    )
}

export default Home