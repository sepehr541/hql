import React  from 'react'

const Home = (props) => {
    return(
        <div className="Home">
            <head>
            <title>Vancouver </title>
            </head>
            {/* <iframe width="1000" height="678" src="https://www.youtube.com/embed/WbfjRoQVZSw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            <video width="540" height="310" controls>
                <source src="~/Desktop/vancouver.mp4" type="video/mp4"/>
                <source src="~/Desktop/vancouver.mp4" type="video/ogg"/>


             </video>
   
     
        </div>
    )
}

export default Home