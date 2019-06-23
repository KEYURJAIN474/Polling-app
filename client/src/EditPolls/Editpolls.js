import React from 'react'
import Navbar from '../Homepage/navbar'
import Footer from '../Homepage/Footer'
import './Editpolls.css'
import { ListGroup,Container,Col,Row } from 'react-bootstrap'
import { faEdit,faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Editpolls() {
    return (
        <div>
            <Navbar />
            <Container>
            <Row>
                
                <Col>
                  
                <ListGroup className="formclass"><h1>My Polls</h1>
                    <ListGroup.Item className="list">Cras justo odio<FontAwesomeIcon icon={faTrashAlt} className="plus" /><FontAwesomeIcon icon={faEdit} className="plus" /></ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in<FontAwesomeIcon icon={faTrashAlt} className="plus" /><FontAwesomeIcon icon={faEdit} className="plus" /></ListGroup.Item>
                    <ListGroup.Item>Morbi leo risus<FontAwesomeIcon icon={faTrashAlt} className="plus" /><FontAwesomeIcon icon={faEdit} className="plus" /></ListGroup.Item>
                    <ListGroup.Item>Porta ac consectetur ac<FontAwesomeIcon icon={faTrashAlt} className="plus" /><FontAwesomeIcon icon={faEdit} className="plus" /></ListGroup.Item>
                </ListGroup>
                <Footer />  
                </Col>
                </Row>
            </Container>    
            
        </div>
    )
}
