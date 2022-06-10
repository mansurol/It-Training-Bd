import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import ImgTwo from '../../Image/image1.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'
import './SectionThree.css'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
const SectionTwo = () => {
    return (
        <div>
            <Container>
                <div className="row">
                    <div className="col-lg-7 col-md-6 col-sm-6 CompleteContentStyle">
                       <ol className="DemandCourseStyle">
                           <li><b>On-Demand Course</b></li>
                       </ol>
                       <h2>Complete Software <br/> Quality  Assurance & Cyber Security</h2>   
                       <div className='mt-5 mb-5'>       
                      
                      <Link to="/courses"><Button variant="secondary">View All Courses  <FontAwesomeIcon className="pt-2 " icon={faArrowRight} /> </Button></Link>
                     
                      </div>
                      
                    </div>

                    <div className="col-lg-5 col-md-6 col-sm-6 ImgTwoStyle">
                            <img src={ImgTwo} alt="" />                                                                                                                                                              
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default SectionTwo;