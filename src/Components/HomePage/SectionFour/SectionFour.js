import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import './SectionFour.css'
import Img3 from '../../Image/img3.jpg'
const SectionFour = () => {
    return (
        <div>
            <Container>
                <div className="row pt-5 pb-5">
                    <div className='col-lg-6 col-md-6 col-sm-6 pt-5 pb-5'>
                         <img src={Img3} alt="" />
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-6 pt-5 pb-5'>
                        <div>
                        <div className='text-center'>
                             <h3><b>Ongoing Courses</b></h3>
                         </div>
                        <div className='d-flex'>
                            <div className='col-lg-3 col-md-3 col-sm-3'>
                                <p>Hands-On SQA & Cyber Security <br/>ISTQB Certified tester </p>
                                <p>Foundation level(CTFL) </p>
                            </div>
                            <div className='col-lg-3 col-md-3 col-sm-3'>
                                <p>Scrum Master Certification  </p>
                                 <p>Ethical Hacking </p>
                            </div>

                        </div>

                        </div>

                         </div>

                </div>
            </Container>
            
        </div>
    );
};

export default SectionFour;