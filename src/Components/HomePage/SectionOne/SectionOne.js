import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button'
import './SectionOne.css'
import Imgsqa from '../../Image/it.jpg'
import {Link} from 'react-router-dom'
const SectionOne = () => {
    return (
        <div className="BgColor">
             <Container>
                <div className='row'>
                    <div className='col-lg-8 col-md-6 col-md-6 pt-5 pb-5 '>
                        <h1 className="pb-3">Change Your Life with <br/>IT TRAINING BD</h1>
                          <h6 className="pb-3">We have 135+ successful student now !</h6>
                          <Link to="/courses"><Button variant="secondary">VIEW COURSES</Button></Link>
                    </div>

                    <div className='col-lg-4 col-md-6 col-md-6 pt-3 pb-5 ImgStyleOne'>
                        <img src={Imgsqa} alt="" />
                    </div>

                </div>
             </Container>
        </div>
    );
};

export default SectionOne;