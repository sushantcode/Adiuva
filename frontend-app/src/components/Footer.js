import React from "react";
import "./Footer.css"
import './Socialpic.jpg'


const Footer = () => {
    return(
        <div className="AppFooter">
            <div className ="footercontainer">
                <div className="footrow">
                <div className="row2">
                    <p className="Terms">
                        &copy;{new Date().getFullYear} Adiuva | All Rights Reserved | Terms Of Service | Privacy
                    </p>
                    <img src= {require("./Socialpic.jpg")} height='30px' width = '70px' alt="Social Media"></img>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;