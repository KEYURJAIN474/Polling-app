import React from 'react'
import Navbar from '../Homepage/navbar'
import './Stats.css'
import { Button, Form, Container, Row, Col } from 'react-bootstrap'
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Stats() {
    return (
        <div>
            <Navbar />
            <div className="contain">
                <div className="row">
                    <div className="col">
                        <h1 style={{ textAlign: "center" }}>who will win wc 2019</h1>
                        {/* <br /> */}
                        <h5>Date:-Date of pooling</h5>
                        {/* <br /> */}
                        <h5><Button variant="info">55</Button></h5>
                    </div>
                </div>
            </div>

            <Container className="containvote">
                <Row>
                    <Col md={6} style={{ textAlign: "center" }}>
                        <Form style={{ width: "300px" }}>
                            <Form.Group as={Col} controlId="formGridState" style={{ padding: "0" }}>
                                <Form.Label><h4 style={{ textAlign: "center" }}><b>Vote</b></h4></Form.Label>
                                <Form.Control as="select" >
                                    <option value="" disabled="disabled" selected="selected" hidden="">Choose an option...</option>
                                    <option>India</option>
                                    <option>Aus</option>
                                </Form.Control>
                            </Form.Group>

                            <Button variant="info" style={{ width: "100%" }}>Submit</Button>
                            <div style={{ marginTop: "1rem" }}>
                                <div className="row">
                                    <div className="col-sm-2">
                             <FontAwesomeIcon icon={faShareAlt} style={{textSize:"50px"}}/></div> 
                             <div className="col-sm-10"> 
                                 <Form.Control type="text" placeholder="Option 1" /> 
                            </div></div></div>
                        </Form>
                    </Col>
                    <Col md={6}>
                        <Form style={{ width: "300px" }}>
                            <Form.Group as={Col} controlId="formGridState" style={{ padding: "0" }}>
                                <Form.Label><h4 style={{ textAlign: "center" }}><b>Vote</b></h4></Form.Label>
                                <Form.Control as="select" >
                                    <option value="" disabled="disabled" selected="selected" hidden="">Choose an option...</option>
                                    <option>India</option>
                                    <option>Aus</option>
                                </Form.Control>
                            </Form.Group>

                            <Button variant="info" style={{ width: "100%" }}>Submit</Button>
                        </Form>
                    </Col>

                </Row>
            </Container>

        </div>
    )
}
