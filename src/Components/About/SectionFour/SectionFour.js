import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import './SectionFour.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshakeAngle , faArrowRight} from '@fortawesome/free-solid-svg-icons'

const SectionFour = () => {
    return (
        <div className="BgColorFour">
            <Container>
            <div className='row'>
            <div className="mt-5 col-lg-9 col-md-6 col-sm-6">
                      <div>
                      <div className="miniBox mb-2 ">
                        <FontAwesomeIcon className="p-2" icon={faHandshakeAngle} size="1x" />
                         </div>
                         <div>
                        <h3><b>Service</b></h3>
                    </div>  
                      </div>
                      <div>
                          
                      <div className='d-flex'>
                      <FontAwesomeIcon className="p-1" icon={faArrowRight} /> 
                      <p className='textStyle'>24/7 Online Support </p>
                      </div>
                      <div className='d-flex'>
                      <FontAwesomeIcon className="p-1" icon={faArrowRight} /> 
                      <p className='textStyle'>Weekend Workshops </p>
                      </div>
                      <div className='d-flex'>
                      <FontAwesomeIcon className="p-1" icon={faArrowRight} /> 
                      <p className='textStyle'>Lifetime post-training support </p>
                      </div>
                      <div className='d-flex'>
                      <FontAwesomeIcon className="p-1" icon={faArrowRight} /> 
                      <p className='textStyle'>Books & online self-study sessions </p>
                      </div>
                      <div className='d-flex'>
                      <FontAwesomeIcon className="p-1" icon={faArrowRight} /> 
                      <p className='textStyle'>Class Record & Review Class </p>
                      </div>
                      <div className='d-flex'>
                      <FontAwesomeIcon className="p-1" icon={faArrowRight} /> 
                      <p className='textStyle'>Mock Interview & CV Writing </p>
                      </div>
                      <div className='d-flex'>
                      <FontAwesomeIcon className="p-1" icon={faArrowRight} /> 
                      <p className='textStyle'>Internship Opportunity </p>
                      </div>
                      <div className='d-flex'>
                      <FontAwesomeIcon className="p-1" icon={faArrowRight} /> 
                      <p className='textStyle'>Job Placement </p>
                      </div>

                    
                      </div>

                    </div>

                  
                    <div className="mt-5 col-lg-3 col-md-6 col-sm-6 ">
                    <div className=" justify-content-end">
                    <div >
                      <div className="miniBox mb-2 ">
                        <FontAwesomeIcon className="p-2" icon={faHandshakeAngle} size="1x" />
                         </div>
                         <div>
                        <h3><b>Professional Certification</b></h3>
                    </div>  
                      </div>
                      <div>
                          
                      <div className='d-flex'>
                      <FontAwesomeIcon className="p-1" icon={faArrowRight} /> 
                      <p className='textStyle'>Freelancing  </p>
                      </div>
                      <div className='d-flex'>
                      <FontAwesomeIcon className="p-1" icon={faArrowRight} /> 
                      <p className='textStyle'>Job Placement Registration</p>
                      </div>
                      <div className='d-flex'>
                      <FontAwesomeIcon className="p-1" icon={faArrowRight} /> 
                      <p className='textStyle'>Interview Question  </p>
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
/* 
*/