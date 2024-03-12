import React from "react";
import '../style/Slideshow.css';
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Slideshow=() =>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2
      };
    return(
        <div className="main"> 
            <Slider{...settings}> 
                    {data.map((d) =>  ( 
                        <div className="card">
                            <div className="displaybg">
                                <img src={d.pic} alt="" className="pic"/>
                            </div>
                            <div className="contenttext">
                                <h3>{d.title}</h3> 
                                <p className="info">{d.content}</p> 
                            </div> 
                            
                        </div>
                        
                    ))}  
            </Slider>    
        </div> 

    );

}


const data = [
    {
        pic:img1,
        title: "OUR MISSION",
        content:"We address the human element in cyber risk by training personnel on securing computers and IoT devices within the 4IR landscape. Our ongoing services provide a safety net: monthly threat reports, defensive & offensive cyber strategies, high-level cyber risk advice, and innovative solutions, all backed by expertly designed and managed cybersecurity policies."
    },

    {
        pic:img4,
        title: 'OUR SERVICES',
        content:' JJK Cyberforce offers a comprehensive suite of services leveraging cutting-edge technology.  From penetration testing and digital forensics to advanced information security and even quantum information science, our team of mathematicians and scientists provides a holistic approach to securing your digital world.' 
    },
    {
        pic:img2,
        title: 'CYBER THREATS',
        content:'Cyberattacks are relentless, striking at the very foundations of our digital world – from elections and financial systems to power grids and transportation. JJK Cyberforce recognizes this ever-present threat. Our vision is to continuously innovate and develop new cybersecurity solutions, staying ahead of attackers and safeguarding your digital world.' 
    },
    {
        pic:img3,
        title: "SECURING TOMORROW, TODAY",
        content:'Combine data science and mathematics to analyze risk and design secure operations.  Our mathematicians develop unbreakable encryption algorithms to stay ahead of quantum computing threats, ensuring information security in the coming technological era.'
    },


]


export default Slideshow;