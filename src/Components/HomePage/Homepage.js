import React from 'react';
import SectionOne from './SectionOne/SectionOne'
import SectionTwo from './SectionTwo/SectionTwo';
import SectionThree from './SectionThree/SectionThree';
import SectionFour from './SectionFour/SectionFour';
import SectionFive from './SectionFive/SectionFive';
import SectionSix from './SectionSix/SectionSix';
import SectionSeven from './SectionSeven/SectionSeven';

const Homepage = () => {
    return (
        <div>
           <SectionOne/>
           <SectionTwo/>
           <SectionThree/>
           <SectionFive/>
           <SectionFour/>
           <SectionSix/>
           <SectionSeven/>
           
        </div>
    );
};

export default Homepage;