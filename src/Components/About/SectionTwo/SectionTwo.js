import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import './SectionTwo.css'
const SectionTwo = () => {
    return (
        <div className="BgColorTwo">
            <Container>
                <div className="row">
                    <div className='col-lg-4 col-md-4 col-sm-4 pt-5 SectionTwoContentOne' >
                        <h1>Our Vision</h1>
                    </div>
                    <div className='col-lg-8 col-md-8 col-sm-8 pt-5 pb-5 SectionTwoContentTwo'>
                        <p>To enrich the knowledge & skill sets of young software engineers by providing value
                             added training in the areas of Software Development & Testing and To
                              serve the industries by providing trained human resources in the area of Software development.
                            We also want to use the power of youth by serving and meeting the arising needs both in local and global organizations by broadening the areas and possibilities for our future leaders.</p>
                    </div>

                </div>

            </Container>
        </div>
    );
};

export default SectionTwo;