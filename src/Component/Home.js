import React  from 'react'

const Home = (props) => {
    return(
        <div className="Home">
            <head>
            <title>Vancouver </title>
            </head>
            {/* <iframe width="1000" height="678" src="https://www.youtube.com/embed/WbfjRoQVZSw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            <body>
            <video width="540" height="310" controls>
                <source src="~/Desktop/hql/vancouver.mp4" type="video/mp4"/>
                <source src="~/Desktop/hql/vancouver.mp4" type="video/ogg"/>

             </video>
            </body>
   
     
        </div>
    )
}

export default Home