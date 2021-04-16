import React from 'react'

import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import 'bootstrap/dist/css/bootstrap.min.css'

 const Cards = (props) => {
     const { name, Bio, year, id} = props
     const age = 2021-year;
    
     return(
        <div>
    <Card 
    style={{ width: '500px', margin : '50px'}}>
  <Card.Img variant="top" src="https://picsum.photos/100" />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
      {Bio}
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>{age} years old today 🎂</ListGroupItem>
  </ListGroup>
  
</Card>
</div>
);
    
}

export default Cards;
