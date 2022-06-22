import React from 'react';
import './SectionSixPartOne.css'
import Card from 'react-bootstrap/Card'
const SectionSixPartOne = (props) => {
  
    const {Name,Img,RegNo,University,Company} = props.Profile
    return (
  

<div className="p-2">
<Card style={{ height:'25rem' }} className="cardImg">
<Card.Img variant="top" src={Img} />
<Card.Body>
<Card.Title> <h4><b>{Name}</b></h4></Card.Title>
<Card.Text> <p>{RegNo}</p></Card.Text>
<Card.Text> <p>{University}</p></Card.Text>
<Card.Text> <p>{Company}</p></Card.Text>


</Card.Body>
</Card>
</div>
     
    );
};

export default SectionSixPartOne;
