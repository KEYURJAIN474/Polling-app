import React from 'react';
import { Nav,Navbar } from 'react-bootstrap'
import { BrowserRouter as Router, Route,Link } from "react-router-dom";

const Navbars = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="xl" bg="dark" variant="dark">
                <Navbar.Brand href="#home">VotingApp</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                       
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets"><Link to="/"><span style={{color:"white"}}>Register</span></Link></Nav.Link>
                        <Nav.Link href="#deets"><Link to="/login/"><span style={{color:"white"}}>Login</span></Link></Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
export default Navbars;