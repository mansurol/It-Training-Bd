import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import logoFooter from '../Image/Logo.png'
import './Footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faLinkedin,
    faInstagram,
  
      } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
    return (
        <div>
            <Container>
                <div className="row">
                    <div className="col-lg-6 col-md-4 FooterContent ">
                      <img className="pt-5 pb-5" src={logoFooter} alt="" />
                      <p>Software Testing training course helps you learn the of software 
                          testing in one online course. These are the important testing 
                          areas that everyone on your 
                          team needs to know about software quality</p>
                          <div className="pt-5">
                          <a href="/" ><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
                          <a href="/" className="IconStyle Instagram"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
                          <a href="/" className="IconStyle" > <FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                          <a href="/" className="IconStyle youtube"><FontAwesomeIcon icon={faYoutube} size="2x" /></a>
                          
                         
                          
                          </div>
                    </div>

                    <div className="col-lg-3 col-md-4 FooterContentHover">
                        <h4 className="pt-5 "><b>POPULAR COURSES</b></h4>
                        <hr/>
                        <p>Hands-On SQA & Cyber Security</p>
                        <p>ISTQB Certified tester Foundation </p>
                        <p>level(CTFL)</p>
                        <p>Scrum Master Certification</p>
                        <p>Ethical Hacking</p>
                        <p>Data Science & Machine Learning</p>
                        <p>DevOps</p>
                        <p>PRIVACY POLICY</p>
                        
     
                     </div>

                     <div className="col-lg-3 col-md-4 ">
                     <h4 className="pt-5 "><b>CONTACT INFO</b></h4>
                     <hr/>
                        <h4><b>Address</b></h4>
                        <p>50/1 Rajani chowdhury Road ,<br/>Gandaria , Dhaka</p>
                        <h4><b>Phone</b></h4>
                        <p><b>Contact:</b> +880 1630211216</p>
                        <h4><b>Email</b></h4>
                        <p>ittrainingbd7@gmail.com</p>
                   
                     </div>

                </div>
            </Container>
            <hr/>
            <div className="text-center">
                <p><b>Copyright © IT Training BD</b></p>
            </div>
        </div>
    );
};

export default Footer;