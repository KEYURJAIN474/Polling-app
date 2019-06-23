import React from 'react'
import Navbars from '../Homepage/navbar';
import { Form, Col, Row, Button } from 'react-bootstrap'
export default function Password() {
  return (
    <div>
      <Navbars />
      <Form style={{ margin: "5rem" }}>
        <Form.Group as={Row} controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Current Password
    </Form.Label>
          <Col sm="10">
            <Form.Control type="password" placeholder="Password" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            New Password
          </Form.Label>
          <Col sm="10">
            <Form.Control type="password" placeholder="Password" />
          </Col>
        </Form.Group>
        <Col style={{textAlign:"center",marginTop:"2rem"}}>
        <Button variant="primary" type="submit" style={{}}> Submit</Button>
        </Col>
      </Form>
      
    </div>
  )
}
