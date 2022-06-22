import React from 'react';

const PartOne = (props) => {
 
  const {Img} = props.Sliderdatas
  return (
    <div>
      <img src={Img} alt="" />
    </div>
  );
};

export default PartOne;