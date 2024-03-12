import React from "react";
import Header from '../components/Header';
import Footer from '../components/Footer'
import img5 from '../images/img5.JPG'
import '../style/About.css'

const About=() =>{
    return(
        <div>
            <Header/>
            <div className="heading"></div> 
                <h1>About Us</h1> 
                
                <h4>JJK Cyberforce is a next- generation cybersecurity company. We help clients keep secretes
                    secretive. Secrete is security, secrete is power, and secrete is victory.</h4> 
            <div className="about-container">
                <div className="about">
                <div>
                    <img className= "about-image" src={img5} alt=""/>
                </div>
                    <div className="about-content">
                    <h2>JJK Cybersecurity: Protecting Your Tomorrow, Today</h2> 
                    <p>
                    JJK Cybersecurity is a multi-disciplinary team of experts dedicated to providing comprehensive information security solutions. We leverage cutting-edge research and advanced technologies to create a secure environment for our clients.

                    Our Core Specialties:
                    <ul className='liststyle'>
                        <li><span className="textstyle">JJK Cybersecurity Team:</span> Our research team tackles complex problems in the ICT space using advanced operations research techniques. We address challenges faced by IT professionals, drawing from various disciplines like theoretical computer science, applied mathematics, and theoretical physics. We focus on groundbreaking mathematical solutions for cybersecurity, including geometric approaches, network optimization, and data security.</li>
                        <li><span className="textstyle">JJK CyberOps Team:</span> Our cyber operations team utilizes a blend of custom-designed and existing tools to safeguard your networks and systems. We actively defend against cyber threats through network security measures, malware analysis, incident response, and vulnerability assessments. Our team's expertise spans digital forensics, red teaming, and security assessments to help clients make informed decisions about their cybersecurity posture.</li>
                        <li><span className="textstyle">JJK InfoSec Team:</span> Our information security team leverages cryptography to protect your data and communications. We design and implement algorithms for encryption, authentication, digital signatures, and key management. These solutions ensure data confidentiality, integrity, and non-repudiation across various industries. JJK has even developed its own digital signature scheme, showcasing our commitment to innovation.</li>
                        <li><span className="textstyle">JJK MLOps Team:</span> Our machine learning operations team bridges the gap between data science and software engineering. We automate the lifecycle of machine learning models, from building and testing to deployment and monitoring. This ensures efficient, cost-effective, and secure management of your AI models, enabling them to meet regulatory requirements.</li>
                        <li><span className="textstyle">JJK AI Team:</span> Our artificial intelligence team is at the forefront of developing advanced AGI algorithms for problem-solving. We tackle complex challenges through large language modeling and create a range of AI products, including chatbots, biometric recognition systems, and intelligent detection systems.</li>
                    </ul>
                    At JJK Cybersecurity, we believe in a future safeguarded by robust cybersecurity solutions. Our team of experts is relentless in its pursuit of innovation, applying cutting-edge research and advanced technologies to create a secure environment for our clients

                    </p> 
                </div>
            </div>
            </div>
            <Footer/>
        </div>

    )

}
export default About;