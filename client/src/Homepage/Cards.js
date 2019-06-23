import React,{Component} from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import './Cards.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Cards extends Component {

   
    render(){
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Card className="card">
                            <Card.Header>Question:1</Card.Header>
                            <Card.Body>
                                <Card.Title>Which is the best Js framework?</Card.Title>
                                <Card.Text>
                                    Date of creation
                                    <Button variant="success" className="button">55</Button>
                                </Card.Text>
                                <Link to="/stats/"><Button variant="primary"><span style={{ color: "white" }}>Cast Vote</span></Button></Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="card">
                            <Card.Header>Question:2</Card.Header>
                            <Card.Body>
                                <Card.Title>Which is the best backend framework?</Card.Title>
                                <Card.Text>
                                    Date of creation
                                    <Button variant="success" className="button">55</Button>
                                </Card.Text>
                                <Button variant="primary"><Link to="/stats/"><span style={{ color: "white" }}>Cast Vote</span></Link></Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="card">
                            <Card.Header>Question:3</Card.Header>
                            <Card.Body>
                                <Card.Title>Who will win icc 2019 world cup?</Card.Title>
                                <Card.Text>
                                    Date of creation
                                    <Button variant="success" className="button">55</Button>
                                </Card.Text>
                                <Button variant="primary"><Link to="/stats/"><span style={{ color: "white" }}>Cast Vote</span></Link></Button>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>

            </Container>
        </div>
    )
}
}
export default Cards;