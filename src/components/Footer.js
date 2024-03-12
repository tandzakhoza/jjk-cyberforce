import React from 'react';
import '../style/Footer.css';


const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2024 All rights reserved.</p>
      <div class="footer-center">
            <div>
                <i class="fa fa-map-marker"></i>
                <p>Madadeni, Newcastle, 2940</p>
            </div>

            <div>
                <i class="fa fa-phone"></i>
                <p>+27 78 988 3972</p>
            </div>
            <div>
                <i class="fa fa-envelope"></i>
                <p><a href="mailto:jjkhoza@jjkanalytics.co.za">jjkhoza@jjkanalytics.co.za</a></p>
            </div>
            <div>
                <p class="footer-company-about">
                    <strong>JJK CYBERFORCE </strong> 
                     is a next- generation cybersecurity company. We help clients keep secretes
                    secretive. Secrete is security, secrete is power, and secrete is victory.
                </p>
            </div>
        </div>
    </footer>
  );
};

export default Footer;