import React,{useState} from "react";
import Header from '../components/Header';
import ReactCardFlip from 'react-card-flip';
import '../style/Services.css'
import Footer from "../components/Footer";
import bg from '../images/bg.JPG'


const Services=() =>{
    const [isFlipped, setIsFlipped] = useState(new Set()); 
    const flipCard =(id)=>{ 
        return (event) => {
            event.preventDefault();
            let Flipped = new Set(isFlipped);
            if (Flipped.has(id)){
                Flipped.delete(id)
            }else{
                Flipped.add(id)
            }
        
        setIsFlipped(Flipped);}
    }  
    const bgstyle = {
        backgroundImage: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
        height: '250px',
        margin: 'auto'
      }
    

    return(
        <div className="services-cards">
            <Header/>
            <h1>Our Services</h1>
            <div className="flip-container">
                <div className="cardblock">
                    <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped.has(1)}> 
                        <div className='flipcard' onMouseEnter={flipCard(1)}>
                            <h1>Network & Application Security</h1>
                                <h1>Assessment</h1> 
                            <h2>Information Gathering & Vulnerability Analysis</h2>
                        </div> 
                        <div className='card-back' style={bgstyle} onMouseLeave={flipCard(1)}>
                            <h3>We meticulously analyze your network infrastructure and applications to identify potential weaknesses, misconfigurations, and security gaps. This includes gathering detailed information about your network devices, operating systems, and services, as well as pinpointing known vulnerabilities in your web applications and databases.</h3>
                        </div> 
                    </ReactCardFlip>
                 </div>
                <div className="cardblock">
                    <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped.has(2)}> 
                        <div className='flipcard' onMouseEnter={flipCard(2)}>
                            <h1>Penetration</h1>
                                <h1>Testing</h1> 
                            <h2>Password Attacks & Exploitation Development</h2>
                        </div> 
                        <div className='card-back' style={bgstyle} onMouseLeave={flipCard(2)}> 
                            <h3>Our team leverages various techniques to simulate real-world attacks, including password cracking, exploiting vulnerabilities (or even developing custom exploits), and assessing wireless network security. This proactive approach uncovers security flaws before attackers can utilize them.</h3>
                        </div> 
                    </ReactCardFlip>
                </div>
                <div className="cardblock">
                    <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped.has(3)}> 
                        <div className='flipcard' onMouseEnter={flipCard(3)}>
                            <h1>Network Traffic </h1>
                                <h1>Monitoring & Analysis</h1> 
                            <h2>Sniffing & Spoofing Detection</h2>
                        </div> 
                        <div className='card-back' style={bgstyle} onMouseLeave={flipCard(3)}> 
                            <h3>We possess the expertise to analyze network traffic patterns, potentially uncovering unauthorized access attempts and data breaches. This helps you maintain control over your network and detect suspicious activity.</h3>
                        </div> 
                    </ReactCardFlip>
                </div>
                <div className="cardblock">
                    <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped.has(4)}> 
                        <div className='flipcard' onMouseEnter={flipCard(4)}>
                            <h1>Digital Forensics &</h1>
                                <h1> Post-Exploitation</h1>
                            <h2>Incident Response & Evidence Collection</h2> 
                        </div> 
                        <div className='card-back' style={bgstyle} onMouseLeave={flipCard(4)}> 
                            <h3>In the event of a security breach, we can assist with gaining and maintaining access to compromised systems to understand the scope of the attack and collect evidence. Additionally, we offer digital forensics services to analyze compromised devices and networks, helping you determine the root cause of the incident and recover lost data.</h3>
                        </div> 
                    </ReactCardFlip>
                </div>
                <div className="cardblock">
                    <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped.has(5)}> 
                        <div className='flipcard' onMouseEnter={flipCard(5)}>
                            <h1>Comprehensive Reporting </h1>
                                <h1> & Training</h1> 
                            <h2>Clear Communication & Social Engineering Awareness</h2>
                        </div> 
                        <div className='card-back' style={bgstyle} onMouseLeave={flipCard(5)}> 
                            <h3>We provide detailed reports outlining our findings, allowing you to make informed decisions about mitigating security risks. We also offer social engineering awareness training to empower your staff to recognize and resist these common attack tactics.</h3>
                        </div> 
                    </ReactCardFlip>
                </div>
                <div className="cardblock">
                    <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped.has(5)}> 
                        <div className='flipcard' onMouseEnter={flipCard(5)}>
                            <h1>Proactive Defense & Continuous Improvement</h1> 
                            <h2>Reverse Engineering & Threat Intelligence</h2>
                        </div> 
                        <div className='card-back' style={bgstyle} onMouseLeave={flipCard(5)}> 
                            <h3>We stay ahead of the curve by employing reverse engineering techniques to understand the capabilities of emerging threats and malware. This allows us to continuously improve our security posture and remain vigilant against evolving cyberattacks.</h3>
                        </div> 
                    </ReactCardFlip>
                </div> 
        </div>
        <Footer/>
        </div>

    )

}
export default Services;