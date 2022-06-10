import React from 'react';
import SectionOne from './SectionOne/SectionOne'
import SectionTwo from './SectionTwo/SectionTwo';
import SectionThree from './SectionThree/SectionThree';
import SectionFour from './SectionFour/SectionFour';

const Homepage = () => {
    return (
        <div>
           <SectionOne/>
           <SectionTwo/>
           <SectionThree/>
           <SectionFour/>
        </div>
    );
};

export default Homepage;