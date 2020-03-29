import React, { Fragment } from 'react'
import './footer.css'
import logo from '../Logo.png'
import insta from '../insta.png'

const Footer=(props)=>{
    return(
        <Fragment>

            <footer id='footer' className="footer">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <div className="content">
                    <div className="logo">
                        <img src={logo} alt=""/>
                    </div>
                    <div>
                        <div >
                            <h2 className="social">About us</h2>
                            <ul className="amirInsta">
                                <li>Amir sayyar</li>
                                <li>
                                <a href="https://www.instagram.com/amirsayyar/">
                                <img src={insta} height='30px' width='30px' alt=""/>
                                </a>
                                </li>
                                <li>Sepehr Noorafshan</li>
                                <li>
                                <a href="https://www.instagram.com/sepehr5411/">
                                <img src={insta} height='30px' width='30px' alt=""/>
                                </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                        <ul className="contact">
                                <li>contact us</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </footer>
        </Fragment>
    )
}


export default Footer;