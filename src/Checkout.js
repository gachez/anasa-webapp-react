import React, {Component} from 'react'
import './styles-css/Checkout.css'
import Menu from './components/Menu'
import { Form ,Button, Container, Col, Table, Row, Breadcrumb} from 'react-bootstrap'
import Footer from './components/Footer'
import axios from 'axios'


export default class Checkout extends Component{

    state={
        isLoaded: false,
        product: []
    }

    componentDidMount(){
        
        axios.get(`https://anasaventures.com/dashboard/wp-json/wp/v2/${localStorage.postname}/${parseInt(localStorage.id)}`)
        .then(res => {
            this.setState({
                product: res.data,
                isLoaded: true
            })
        })
        .catch(err => console.log(err))
    }

    render(){
      
      if(this.state.isLoaded){
        console.log(this.state.product)
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
                </Breadcrumb>
                <br /><br />
                {/* SECTION THAT HOLDS THE BILLING DETAILS INPUT AND ORDER SUMMARY */}
                <Container className="billing-and-order">
                   <Row>
                   <Col sm={6}>
                    <h1 style={{padding: '24px'}}>Order details</h1>
                    <br />
                    <Form>
                    <Form.Group controlId="formBasicEmail">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="name" name="full-name" placeholder="Full Name" required/>
                          
                        </Form.Group>   
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Enter email" required/>
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Phone number</Form.Label>
                            <Form.Control type="number" name="phone-number" placeholder="Phone number" required/>
                        </Form.Group>  

                           <Form.Group controlId="formBasicPassword">
                            <Form.Label>Country</Form.Label>
                            <Form.Control type="name" name="country" value="Kenya" required/>
                        </Form.Group>  

                           <Form.Group controlId="formBasicPassword">
                            <Form.Label>County</Form.Label>
                            <Form.Control type="text" name="county" placeholder="County" required/>
                        </Form.Group>  

                           <Form.Group controlId="formBasicPassword">
                            <Form.Label>Address line</Form.Label>
                            <Form.Control type="address" name="address" placeholder="Address line" />
                        </Form.Group>  

                           <Form.Group controlId="formBasicPassword">
                            <Form.Label>Postcode</Form.Label>
                            <Form.Control type="text" name="postalcode" placeholder="Postcode" />
                        </Form.Group>                    
                        <Form.Group>
                        <Form.Check
                        label="create an account?"
                        />
                    </Form.Group>
                    </Form>
                    </Col>

                    <Col sm={6}>
                    
                        <h1 style={{padding: '24px'}}>Order Summary</h1>
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
                                <td dangerouslySetInnerHTML={{__html: this.state.product.title.rendered}}></td>
                                <td>x01</td>
                                <td>{this.state.product.acf['price']}</td>
                                </tr>
                        
                                <tr>
                                <td>SUBTOTAL</td>
                                <td></td>
                                <td>{this.state.product.acf['price']}</td>
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
                    <Button variant="danger" id="complete-order" type="submit" onClick={
                        () =>{

                            let orderDets = {
                                fullname: document.getElementsByName('full-name')[0].value,
                                email: document.getElementsByName('email')[0].value,
                                phone: document.getElementsByName('phone-number')[0].value,
                                country: document.getElementsByName('country')[0].value,
                                county: document.getElementsByName('county')[0].value,
                                address: document.getElementsByName('address')[0].value,
                                postalcode: document.getElementsByName('postalcode')[0].value
                            }

                            window.location.href="/confirmation"
                            localStorage.setItem('orderDetails', JSON.stringify(orderDets) )
                        }
                    }>COMPLETE ORDER</Button>
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

      return null

    }
}