import React from "react";
import "../style/Header.css"
import logo from '../images/logo.jpg'
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";



const Header=() =>{

    return(
        <div className="header">
            <img src={logo} alt="" className="logo" />
            <span id="logo-name">JJK CYBERFORCE</span> 
            
            <ul className="header-menu">
                <li id="menu-list"><Link to='/' className="bttn">Home</Link></li>
                <li id="menu-list"><Link to='/services' className="bttn">Services</Link></li>
                <li id="menu-list"><Link to='/about' className="bttn">About us</Link></li>
                <li id="menu-list"><button className="btn" type="submit"><HashLink smooth to='#contact-us' className="bttn">Contact us</HashLink></button></li>
            </ul>
        </div>

    )

}
export default Header;