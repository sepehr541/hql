import React, { useEffect } from 'react'
import paral1 from '../parallex1.jpg'
import paral2 from '../parallex2.jpg'
import nodeLogo from '../nodejsLogo.png';
import reactLogo from '../reactjsLogo.svg';
import expressLogo from '../expressLogo.svg';
import postgresLogo from '../postgreslogo.png';
import M from 'materialize-css'
const About = (props) => {
    const LOGO_WH = '150px'

    const LOGO_STYLE = {
        width: LOGO_WH,
        height: LOGO_WH
    }
    useEffect(() => {
        var elems = document.querySelectorAll('.parallax');
        M.Parallax.init(elems, {});
    }, [])
    return (
        <div>
            <div className="parallax-container">
                <div className="parallax"><img src={paral1} style={{ width: '100%' }} alt=''/></div>
            </div>
            <div className="section white">
                <div className="row container">
                    <h2 className="header">HQL at Vancouver</h2>
                    <p className="grey-text text-darken-3 lighten-3">
                        HQL is a fictional hotel in Vancouver, B.C, managed with an underlaying SQL database.
                    </p>
                    <p>
                        Powered by:
                         </p>
                    <div className='row'>
                        <img src={nodeLogo} alt='' style={{width:'160px', height:LOGO_WH}} className='col s4'/>
                        <img src={reactLogo} alt='' style={LOGO_STYLE} className='col s4' />
                        <img src={expressLogo} alt='' style={LOGO_STYLE} className='col s4'/>
                        <img src={postgresLogo} alt='' style={{width:'160px', height:LOGO_WH}} className='col s4' />
                    </div>
                </div>
            </div>
            <div className="parallax-container">
                <div className="parallax"><img src={paral2} style={{ width: '100%' }} alt='' /></div>
            </div>
        </div>
    )
}

export default About