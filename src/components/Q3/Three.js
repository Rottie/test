import React from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const One = () => {
  return (
    <Form>
    <Form.Group className="mb-3" controlId="firtsname">
      <Form.Label>First Name</Form.Label>
      <Form.Control type="text" placeholder="Janet" />
   
    </Form.Group>

    <Form.Group className="mb-3" controlId="lastname">
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="text" placeholder="Weaver" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Weaver" />
    </Form.Group>

    <Button variant="primary" type="submit">
      Confirm
    </Button>
  </Form>
  );
}

export default One;
