import React from 'react';
import './BlogPartOne.css';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'
const BlogPartOne = (props) => {
    const {Img,Title,Day,Content} = props.BlogContent
    return (
        <div className="pb-4 m-auto">
            <Card  style={{ width: '21rem', height:'25rem'}}>
  <Card.Img style={{ height: '10rem' }} variant="top" src={Img} />
  <Card.Body>
    <Card.Title>{Title}</Card.Title>
    <Card.Text>
      {Day}
    </Card.Text>
    <Card.Text>
      {Content}
    </Card.Text>

    <Card.Text>
      <Link to="/home">Read More »</Link>
    </Card.Text>
    
  </Card.Body>
</Card>
            
        </div>
    );
};

export default BlogPartOne;