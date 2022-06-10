import React, { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import './SectionThree.css'
import FakeData from '../../FakeData/Instructors'
import PartOne from './partOne';
const SectionThree = () => {

  const  [Data,setData] = useState(FakeData)

    return (
        <div>
            <Container>
                
                <div className="friend-container  pb-5">
                    {
                        Data.map((InstructorsData)=> <PartOne data={InstructorsData} />)
                    }
                </div>
            </Container>
            
        </div>
    );
};

export default SectionThree;