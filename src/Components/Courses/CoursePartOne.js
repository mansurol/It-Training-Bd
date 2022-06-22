import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './CoursePartOne.css'
const CoursePartOne = (props) => {
    const {Img,Title,Time,Img2,Name,Money} =props.AllCourse
    return (
        <div className="m-auto pb-3">
            <Card style={{ width: '18rem',height:'25rem' }}>
  <Card.Img variant="top" src={Img} />
  <Card.Body>
    <Card.Title>{Title}</Card.Title>
    <Card.Text>
     {Time}
    </Card.Text>
    <div className="d-flex">
        <img src={Img2} alt="" />
        <Card.Text>
     {Name}
    </Card.Text>
    </div>
  </Card.Body>

  <Card.Body>

  <div className='d-flex justify-content-between'>
  <Card.Text href="#">{Money}</Card.Text>
  <Button  variant="outline-success">Enroll</Button>
  </div>

  </Card.Body>
</Card>
            
        </div>
    );
};

export default CoursePartOne;