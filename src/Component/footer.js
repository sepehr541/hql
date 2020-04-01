import React, { Fragment } from 'react'
import './footer.css'
import logo from '../Logo.png'
import insta from '../insta.png'

const Footer = (props) => {
    return (
        <Fragment>
            <footer className='page-footer black'>
                <div className='container'>
                    <div id='footerRow' className='row'>
                        <div className='col s8'>
                            <h4>About us</h4>
                            <div className='col s4'>
                                <div className='row'>
                                    <div className='col s6'>
                                        <p>Amir Sayyar</p>
                                        <a href="https://www.instagram.com/amirsayyar/">

                                            <img src={insta} height='30px' width='30px' alt="" />
                                        </a>
                                    </div>
                                    <div className='col s6'>
                                        <p style={{display: 'block ruby'}}>Sepehr Noorafshan</p>
                                        <a href="https://www.instagram.com/sepehr5411/">
                                            <img src={insta} height='30px' width='30px' alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col s4 pull-s3'>
                            <img src={logo} alt="" />
                        </div>
                    </div>
                </div>
            </footer>
        </Fragment>
    )
}


export default Footer;