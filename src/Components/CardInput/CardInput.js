import React from 'react'
import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import './CardInput.css'

const CardInput = () => {
return (
<div className="OuterComponent">
<div className="InnerComponent">  
<Form>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label >Name</Form.Label >
    <Form.Control type="text" className="Control UpperText"/>
  </Form.Group>
  
  
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label >Bio</Form.Label >
    <Form.Control as="textarea" rows={3} className="Control LowerText"/>
  </Form.Group>
  <Form.Group custom>
  <Form.File controlId="exampleForm.ControlInputArea1" label="Photo"/>
  </Form.Group>
  <Button type="submit" variant="success" className = "Button" block>
    Add +
    </Button> 

  </Form>
  </div>
  </div>
);
}

export default CardInput;