import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import './SectionSeven.css'
import SupportImg from '../../Image/Support.png'
import Button from 'react-bootstrap/Button'
const SectionSeven = () => {
    return (
        <div className="BgColor7">
            <Container>
                <div className='row pt-5 pb-5 '>
                    <div className='col-lg-7 col-md-6 col-sm-6 pb-3 supportImg'>
                        <img src={SupportImg} alt="" />
                    </div>

                    <div className='col-lg-5 col-md-6 col-sm-6 pt-3 supportContentStyle'>
                        <h6>Get help</h6>
                        <h2><b>Lifetime Free <br/>Support</b></h2>
                        <p>During the training and after the training, Shikhbe Shobai provides offline and online support to all of 
                         their students whenever needed. And it's free for the lifetime!</p>

                        
                         <Button variant="secondary">Get Support</Button>

                    </div>

                </div>
            </Container>
            
        </div>
    );
};

export default SectionSeven;