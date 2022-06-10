import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import './SectionTwo.css'

const SectionTwo = () => {
    return (
        <div>
            <Container>
            
            <div className='row'>
                <div className='col-lg-3 col-md-4 col-sm-4 pt-5  SectionTwoStyle'>
                    <h6><b>Teachers With Vision</b></h6>
                    <h2><b>Our Instructors</b></h2>
                   
                  
                  
                </div>
                <div className='borderStyle col-lg-1 	d-none d-lg-block'>
                      
                </div>
                

                <div className='col-lg-8 col-md-8 col-sm-8 pt-5 pb-5 '>
                    <h4><b>Quality training starts with the right instructors.</b></h4>
                    <p>They have the knowledge and the capability to do so and 
                        are the core of every successful learning experience.
                         Each teacher has undergone rigorous assessments and 
                         training to ensure that they have the right skills 
                        and expertise to deliver the training with results.</p>

                </div>

            </div>
            </Container>
        </div>
    );
};

export default SectionTwo;