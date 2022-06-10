import React from 'react';
import './PartOne.css'
const partOne = (props) => {
  const  {Img,Profession,Name,Company,Address} =props.data;

    return (
        <div>
      
         <div className='CardStyle text-center' >
             <img src={Img} alt="" />
             <h6><b>{Profession}</b></h6>
             <h5><b>{Name}</b></h5>
             <p>{Company}</p>
             <p>{Address}</p>
         </div>
  </div>

  
    );
};

export default partOne;