import React from 'react';
import { Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter as Router, Route,Link } from "react-router-dom";




const Navbars = () => {
    const logOut=()=>{
    
        localStorage.removeItem('token');
        
    
    }    
    return (
        <div>
            <Navbar collapseOnSelect expand="xl" bg="dark" variant="dark">
                <Navbar.Brand href="#home">VotingApp</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features"><Link to="/mainpage/"><span style={{ color: "white" }}>Home</span></Link></Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Hi keyur</Nav.Link>
                        <FontAwesomeIcon icon={faCog} style={{ marginTop: "12px", fontSize: "20px", color: "white" }} />
                        <div>
                            <NavDropdown title="Setting" id="collasible-nav-dropdown" style={{ marginRight: "80px" }}>
                            <Link to="/mypolls/"><NavDropdown.Item href="#"><span style={{ color: "black" }}>My Polls</span></NavDropdown.Item></Link>
                            <Link to="/changepassword"><NavDropdown.Item href="#"><span style={{color:"black"}}>Change Password</span></NavDropdown.Item></Link>
                            <NavDropdown.Item href="./login" onClick={logOut}><span style={{color:"black"}}>Logout</span></NavDropdown.Item>
                            </NavDropdown>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
export default Navbars;