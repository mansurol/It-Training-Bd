import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import './SectionFour.css'
import Img3 from '../../Image/img3.jpg'
const SectionFour = () => {
    return (
        <div>
            <Container>
                <div className="row pt-5 pb-5">
                    <div className='col-lg-7 col-md-7 col-sm-6 pt-5 pb-5 ImgStyleSectionFour'>
                         <img src={Img3} alt="" />
                    </div>
                    <div className='col-lg-5 col-md-5 col-sm-6 pt-5 pb-5'>
                        <div>
                        <div className='text-center'>
                             <h3 className='pb-3'> <b>Ongoing Courses</b></h3>
                         </div>
                        <div className='d-flex mb-5'>
                            <div className='col-lg-6 col-md-6 col-sm-6'>
                                <p>Hands-On SQA & Cyber Security <br/>ISTQB Certified tester </p>
                                <p>Foundation level(CTFL) </p>
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-6'>
                                <p>Scrum Master Certification  </p>
                                 <p>Ethical Hacking </p>
                            </div>

                        </div>

                        </div>


                        <div>
                        <div className='text-center'>
                             <h3  className='pb-3'><b>Upcoming Courses</b></h3>
                         </div>
                        <div className='d-flex '>
                            <div className='col-lg-6 col-md-6 col-sm-6'>
                                <p>Data Science & Machine Learning  </p>
                                <p>DevOps</p>
                                <p>AWS </p>
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-6'>
                                <p>Web Development  </p>
                                 <p>Mobile App Development </p>
                                 <p>Graphics Design </p>
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