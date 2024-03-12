import React, {useState} from 'react';
import '../style/Form.css';


const Body=() =>{
    const [username, setName]=useState(""); 
    const [email,setEmail] = useState("");
    const [message, setMessage]=useState("");
   // const [error, setError]= useState("");
    
  
    const handleSubmit = (e) => {
      e.preventDefault();
      alert('Form submitted successfully!'); 
    };

    // if(!message){
    //     setError(<p className="required">Message is empty.Please type message.</p>)
    // }else{
    //     setError("")
    // }

    
    return(
        <div className="form-container">
            
            <div id= 'contact-us' className="contactus">
                <h2>CONTACT US</h2>
                <form className="contactForm">
                    <label>Name</label>
                    <input type="text" 
                            placeholder="Your Name and Surname"     
                            name="name" 
                            value={username} 
                            onChange={(e)=>setName(e.target.value)}
                    />
                    <label>Email</label>
                    <input type="text"
                            placeholder="Enter your Email"
                            name="email"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)} 
                    />
                    <label>Message</label>
                    <textarea name="message"
                            value={message}
                            onChange={(e)=>setMessage(e.target.value)}
                    />
                    {/* {error} */}
                    <button type="submit" value="Send" onClick={handleSubmit}>SUBMIT</button> 
                </form> 
            </div>
            <div className="whyus">
                <h2>WHY US</h2>
                <p>We're a next-generation cybersecurity company that leverages cutting-edge technology and the power of mathematics to stay ahead of threats. Here's why you should choose us:
                    <ul className='liststyle'>
                        <li><span className="textstyle">Unbreakable Defense:</span> We combine 21st-century solutions with future-proof techniques from the second quantum revolution. We find and fix vulnerabilities before they're exploited.</li>
                        <li><span className="textstyle">Complete Protection:</span> We go beyond basic services with white-glove care. We develop secure solutions, provide managed security services, red team testing, and more.</li>
                        <li><span className="textstyle">Quantum-Ready Security: </span>Our core services, built on a foundation of mathematics and technology, are enhanced by training our clients' personnel in cyber awareness programs.</li>
                        <li><span className="textstyle">Experience security in 4IR: </span>The 4th Industrial Revolution's efficiency gains come at the cost of security risks, prompting proactive development of quantum-resistant solutions.</li>
                    </ul><br/>
                JJK Cyberforce keeps your secrets safe, your power secure, and your victory assured.</p>

            </div>
        </div>

    )

    }
export default Body;        
        