import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
// import { faFacebook } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faGooglePlusG } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { SocialIcon } from 'react-social-icons';
export default function Footer() {
    return (
        <div>
            <hr></hr>
            <Container>
                <Row>
                    <Col>
                    <FontAwesomeIcon icon={faGooglePlusG} style={{fontSize:"35px"}}/>
                    {/* <SocialIcon url="http://linkedin.com/in/jaketrent" /> */}
                    </Col>
                    <Col>
                    <FontAwesomeIcon icon={faFacebookF} style={{fontSize:"35px"}}/>
                    {/* <SocialIcon url="http://facebook.com/in/jaketrent" /> */}
                    </Col>
                    <Col>
                    <FontAwesomeIcon icon={faLinkedinIn} style={{fontSize:"35px"}}/>
                    {/* <SocialIcon url="http://google.com/in/jaketrent" /> */}
                    </Col>
                </Row>    
            </Container>
        </div>
    )
}
