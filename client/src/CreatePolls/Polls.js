import React from 'react'
import Navbar from '../Homepage/navbar'
import Footer from '../Homepage/Footer'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




export default function Polls(props) {  
    const option = props.db.options.map((opt,i)=>(
        <Form.Control type="text" placeholder="Option"  
        key={i} onChange={e => props.handleAnswer(e, i)}/>
        
    ))
      
    return ( 
        <div>
            <Navbar />
            <br />
            <Container>
                <Row>
                    <Col>
                        <Form style={{width:"20rem"}}>
                        <h1 style={{textAlign:"center"}}>New Poll</h1><hr/><br/>
                            <Form.Group controlId="formBasicQues">
                                <Form.Label >Pool Tittle</Form.Label>
                                <Form.Control type="text" placeholder="Enter Question" name="question" onChange={props.question}/>
                                
                            </Form.Group>

                             <Form.Group controlId="formBasicOption">
                                <Form.Label>Option</Form.Label>
                                    {option}                   
                            </Form.Group>

                            <div style={{width:"100%", margin:"0px 0px 5px 0px"}}> 
                            <Button variant="secondary" size="lg" style={{width:"100%"}} onClick={props.addAnswer}><FontAwesomeIcon icon={faPlusSquare} className="plus" />New Option</Button>
                            </div>
                            <div style={{width:"100%"}}>
                            <Button variant="primary" type="submit" style={{width:"100%"}} onClick={props.storepolls}> Submit</Button>
                            </div>
                            <div>
                            <Footer />
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}
