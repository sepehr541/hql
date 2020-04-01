import React, { useEffect } from 'react'
import paral1 from '../parallex1.jpg'
import paral2 from '../parallex2.jpg'
import nodeLogo from '../nodejsLogo.png';
import reactLogo from '../reactjsLogo.svg';
import expressLogo from '../expressLogo.svg';
import postgresLogo from '../postgreslogo.png';
import materializeLogo from '../materializeLogo.png';
import azureLogo from '../azureLogo.svg';
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
            <div  className="parallax-container">
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
                        <a href='https://nodejs.org/en/' target="_blank" rel="noopener noreferrer"><img src={nodeLogo} alt='' style={{width:'160px', height:LOGO_WH}} className='col s4'/></a>
                        <a href='https://reactjs.org/' target="_blank" rel="noopener noreferrer"><img src={reactLogo} alt='' style={LOGO_STYLE} className='col s4' /></a>
                        <a href='https://expressjs.com/' target="_blank" rel="noopener noreferrer"><img src={expressLogo} alt='' style={LOGO_STYLE} className='col s4'/></a>
                        <a href='https://www.postgresql.org/' target="_blank" rel="noopener noreferrer"><img src={postgresLogo} alt='' style={{width:'160px', height:LOGO_WH}} className='col s4' /></a>
                        <a href='https://materializecss.com/' target="_blank" rel="noopener noreferrer"><img src={materializeLogo} alt='' style={{width:'230px', height:'130px'}} className='col s4' /></a>
                        <a href='https://azure.microsoft.com/en-ca/' target="_blank" rel="noopener noreferrer"><img src={azureLogo} alt='' style={{width:'200px', height:LOGO_WH}} className='col s4' /></a>
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