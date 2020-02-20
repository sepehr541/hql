import React  from 'react'
import "./video.css"
import Video from "../vancouver.mp4"

const Home = (props) => {
    return(
        <div className="Home">
        
            {/* <iframe width="1000" height="678" src="https://www.youtube.com/embed/WbfjRoQVZSw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
           
            <video className="video" loop  width="1000" height="500" controls>
                <source src={Video} type="video/mp4"/>
                
             </video>
   
     
        </div>
    )
}

export default Home