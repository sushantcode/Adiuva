import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"
import './Socialpic.jpg'


const Footer = () => {
    return(
        <div className="AppFooter">
            <div className ="footercontainer">
                <div className="footrow">
                <div className="row2">
                    <p className="Terms">
                        &copy;{new Date().getFullYear}Adiuva | All Rights Reserved 
                        | <Link to='/termsofservices' className='footerLinks'>Terms of Services </Link>
                        | <Link to='/privacy' className='footerLinks'>Privacy </Link>
                    </p>
                    <p className="SocialLogo">
                    <Link to='www.facebook.com/' className='footerLinks'> <i class="fab fa-facebook" /> </Link> 
                    <Link to='www.twitter.com/' className='footerLinks'> <i class="fab fa-twitter-square" /> </Link> 
                    <Link to='https://www.instagram.com/' className='footerLinks'> <i class="fab fa-instagram-square" /> </Link>
                    </p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;