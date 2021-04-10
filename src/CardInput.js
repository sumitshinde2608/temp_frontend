import React from 'react'
import Form from 'react-bootstrap/Form'

const CardInput = () => {
return (
<div>
<Form>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" />
  </Form.Group>
  
  
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Bio</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  <Form.Group>
  <Form.File controlId="exampleForm.ControlInputArea1" label="Photo"/>
  </Form.Group>

  </Form>
  </div>
);
}

export default CardInput;