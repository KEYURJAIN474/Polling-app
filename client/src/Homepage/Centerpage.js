import React from 'react';
import './Centerpage.css';
import {Button,Container,Row,Col} from 'react-bootstrap';
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter as Router, Route,Link } from "react-router-dom";

function Centerpage(props) {
    return (
        <div>
            <div className="container centerpage">
                <div className="row">
                    <div className="col"><h1>Cast Your Vote</h1>
                    <span>Vote on The Current Polls or Create Your Own</span>    
                    </div>
                    <div>
                    <Link to="/polls/"><Button variant="primary" size="lg"><FontAwesomeIcon icon={faPlusSquare} className="plus" /><span style={{color:"white"}}>New Poll</span></Button></Link>
                    </div> 
                </div>
            </div>   
            <Container>
                <Row>
                    <Col><h2>Current Polls</h2>
                    </Col>
                </Row>    
            </Container> <hr></hr>       
           
        </div>
    )
}


export default Centerpage

