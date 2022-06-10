import React from 'react';
import './SectionOne.css'
import Container from 'react-bootstrap/esm/Container';
const SectionOne = () => {
    return (
        <div className='backgroudColor'>
           <Container>
               <div className='SectionOneContent'>
                   <h2 className='pt-5 pb-3'>Instructors</h2>
                   <p className='pb-5'>Join online education courses to support teachers’ professional learning and <br/>development.</p>
               </div>

           </Container>
        </div>
    );
};

export default SectionOne;