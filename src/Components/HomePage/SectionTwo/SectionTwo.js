import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import './SectionTwo.css'
import Img2 from '../../Image/img2.jpg'
const SectionTwo = () => {
    return (
        <div>
          <Container>
              <div className='text-center mt-5 mb-5'>
                  <h1>why choose us ?</h1>
              </div>

              <div className='row mb-5'>
                  <div className="col-lg-6 col-md-6 col-sm-6 imgSizing">
                      <img src={Img2} alt="" />
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-6 PtextStyle">
                      <h6><b>Take Courses</b></h6>
                      <p>A Coursera Specialization is a series of courses that helps you master a skill. 
                          To begin, enroll in the Specialization directly, or review its courses and choose 
                          the one you’d like to start with. When you subscribe to a course that is part of
                           a Specialization, you’re automatically subscribed to the full Specialization.
                            It’s okay to complete just one course — you can pause your learning or end 
                            your subscription at any time.  Visit your learner dashboard to track your course enrollments and your progress. </p>

                        <h6><b>Hands-on Project</b></h6>
                        <p>Every Specialization includes a hands-on project.
                             You’ll need to successfully finish the project(s) 
                             to complete the Specialization and earn your certificate. 
                             If the Specialization includes a separate course for the
                             ands-on project, you’ll need to finish each of the other
                              courses before you can start it. </p>

                              <h6><b>Earn a Certificate</b></h6>
                        <p>When you finish every course and complete the hands-on project, you’ll earn a Certificate that you can share with prospective employers and your professional network.  </p>

                  </div>
              </div>
          </Container>
            
        </div>
    );
};

export default SectionTwo;