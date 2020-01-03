import React, {Component} from 'react'
import Menu from './components/Menu'
import { Container, Row, Col,Form, Button } from 'react-bootstrap'
import Footer from './components/Footer'

export default class Contact extends Component{
    render(){
        return(
            <div className="contact-page">

                <Menu />

                {/* CONTACT DETAIL SECTION */}
                <Container>
                    <Row>
                        <Col sm={10}>
                            <br /><br /><br /> <br /><br /><br /><br /><br /><br /><br />
                            <h2>Contact Us</h2>
                            <br /><br />
                        <Form>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                    
                          
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows="5" />
                            </Form.Group>
                            <br />
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
                <br /><br />  <br /><br />   <br /><br />

                <Footer />

            </div>
        )
    }
}