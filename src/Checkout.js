import React, {Component} from 'react'
import './styles-css/Checkout.css'
import Menu from './components/Menu'
import { Form ,Button, Container, Col, Table, Row, Breadcrumb} from 'react-bootstrap'
import Footer from './components/Footer'

export default class Checkout extends Component{
    render(){
        return(
            <div className="checkout-page">
                <Menu />
                <br /><br /><br /><br />
                    {/* THE BREADCRUMB SECTION */}
                    <Breadcrumb>
                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                        checkout
                </Breadcrumb.Item>
                    <Breadcrumb.Item active>Data</Breadcrumb.Item>
                </Breadcrumb>
                <br /><br />
                {/* SECTION THAT HOLDS THE BILLING DETAILS INPUT AND ORDER SUMMARY */}
                <Container className="billing-and-order">
                   <Row>
                   <Col sm={6}>
                    <h1 style={{padding: '25px'}}>Order details</h1>
                    <br />
                    <Form>
                    <Form.Group controlId="formBasicEmail">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="name" placeholder="Full Name" />
                          
                        </Form.Group>   
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Phone number</Form.Label>
                            <Form.Control type="number" placeholder="Password" />
                        </Form.Group>  

                           <Form.Group controlId="formBasicPassword">
                            <Form.Label>Country</Form.Label>
                            <Form.Control type="name" value="Kenya" />
                        </Form.Group>  

                           <Form.Group controlId="formBasicPassword">
                            <Form.Label>County</Form.Label>
                            <Form.Control type="text" placeholder="County" />
                        </Form.Group>  

                           <Form.Group controlId="formBasicPassword">
                            <Form.Label>Address line</Form.Label>
                            <Form.Control type="address" placeholder="Address line" />
                        </Form.Group>  

                           <Form.Group controlId="formBasicPassword">
                            <Form.Label>Postcode</Form.Label>
                            <Form.Control type="text" placeholder="Postcode" />
                        </Form.Group>                    
                        <Form.Group>
                        <Form.Check
                        label="create an account?"
                        />
                    </Form.Group>
                    </Form>
                    </Col>

                    <Col sm={6}>
                    
                        <h1 style={{padding: '25px'}}>Order Summary</h1>
                        <br /><hr />
                        <Table responsive>
                            <thead>
                                <tr>
                                <th>Product</th>
                                <th>Qty</th>
                                <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>Ibrahim painting</td>
                                <td>x01</td>
                                <td>$450</td>
                                </tr>
                                <tr>
                                <td>Wooden sculpture</td>
                                <td>x02</td>
                                <td>$560</td>
                                </tr>

                                <tr>
                                <td>SUBTOTAL</td>
                                <td></td>
                                <td>$1570</td>
                                </tr>
                            </tbody>
                        </Table>
                        <br />
                        <p id="note">
                            Please note that you can refuse to purchase the order after quality checking during viewing if not satisfied with the quality.
                        </p>
                        <Form.Group style={{padding: '20px'}}>
                        <Form.Check
                        required
                        label="I’ve read and accept the terms & conditions*"
                        />
                    </Form.Group>
                    <br />
                    <Button variant="danger" id="complete-order">COMPLETE ORDER</Button>
                    </Col>   
                       </Row>
                       <br />
                       <br />
                        
                       <Row id="call-to-action">
                        <Col sm={3}>
                        <div id="place-order">Place your order</div>
                        </Col>

                        <Col sm={3}>
                        <div id="schedule">Schedule a viewing</div>
                        </Col>

                        <Col sm={3}>
                        <div id="confirm">Confirm quality</div>
                        </Col>

                        <Col sm={3}>
                        <div id="pay">Pay on delivery</div>
                        </Col>
                    </Row>
                </Container>

                <Footer />
            </div>
        )
    }
}