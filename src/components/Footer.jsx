import React from 'react'
import { Link } from 'react-router-dom'

import instaImg1 from '../assets/instagram-1.jpg'
import instaImg2 from '../assets/instagram-2.jpg'
import instaImg3 from '../assets/instagram-3.jpg'
import instaImg4 from '../assets/instagram-4.jpg'
import instaImg5 from '../assets/instagram-5.jpg'
import instaImg6 from '../assets/instagram-6.jpg'

const Footer = () => {
    return (
        <>
            <footer className="section__container footer__container">
                <div className="footer__col">
                    <h4>CONTACT INFO</h4>
                    <p>
                        <span>
                            <i className="ri-map-pin-2-fill"></i>
                        </span>
                        123, Kanchan Rupganj, Narayanganj, Bangladesh

                    </p>
                    <p>
                        <span>
                            <i className="ri-mail-fill"></i>
                        </span>
                        Sajh123@gmail.com
                    </p>
                    <p>
                        <span><i className="ri-phone-fill"></i></span>
                        +8801701560326
                    </p>
                </div>
                <div className="footer__col">
                    <h4>COMPANY</h4>
                    <Link to="#">Home</Link>
                    <Link to="#">About Us</Link>
                    <Link to="#">Work With Us</Link>
                    <Link to="#">Our Blog</Link>
                    <Link to="#">Terms &amp; Conditions</Link>
                </div>
                <div className="footer__col">
                    <h4>USEFUL LINK</h4>
                    <Link to="#">Help</Link>
                    <Link to="#">Track My Order</Link>
                    <Link to="#">Men</Link>
                    <Link to="#">Women</Link>
                    <Link to="#">Dresses</Link>
                </div>
                <div className="footer__col">
                    <h4>INSTAGRAM</h4>
                    <div className="instagram__grid">
                        <img src={instaImg1} alt="instagram" />
                        <img
                            src={instaImg2}
                            alt="instagram"
                        /><img src={instaImg3} alt="instagram" />
                        <img
                            src={instaImg4}
                            alt="instagram"
                        /><img src={instaImg5} alt="instagram" /><img
                            src={instaImg6}
                            alt="instagram"
                        />
                    </div>
                </div>
            </footer>
            <div className="footer__bar">
            <p>Copyright © 2025 <strong>Shaj</strong>. All rights reserved.</p>
            </div>
            
    </>
  )
}

export default Footer