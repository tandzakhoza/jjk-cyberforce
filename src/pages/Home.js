import React from "react";
import Header from '../components/Header';
import banner from '../images/b1.jpg';
import '../style/Home.css';
import Slideshow from '../components/Slideshow';
import Form from '../components/Form'
import Footer from "../components/Footer";



const Home=() =>{
    const bannerstyle = {
        backgroundImage: `url(${banner})`,
        backgroundRepeat: 'repeat-x',
        height: '100%',
        width: '100%',
        margin: '0'
      }
    return(
        <div>
            <Header/>
            <div style={bannerstyle} className="body-text">
            <span>
                Cybersecurity, CyberOps,
            </span>
            <span>
                MLOps, Quantum Information Science, & InfoSec
            </span>
            </div>
            <Slideshow/>
            <Form/>
            <Footer/>
        </div>

    )

}
export default Home;