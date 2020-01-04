import React, {Component} from 'react'
import Menu from './components/Menu'
import Footer from './components/Footer'
import { Container, Carousel, Button,Col, Row ,ButtonToolbar,CardDeck, Card, Breadcrumb} from 'react-bootstrap'
import first from './images/first.jpg'
import ibra from './images/ibrahim-al-salahi.png'
import './styles-css/ProductPage.css'
import facebook from './images/social-icons/facebook.png'
import insta from './images/social-icons/instagram.png'
import twitter from './images/social-icons/twitter.png'
import afro from './images/08f180dd1ec69f11f72c2b4db0eca7b0.jpg'
import woman from './images/womanology.jpg'
import download from './images/download.jpeg'



export default class ProductPage extends Component{
    render(){
        return(
            <div className="singe-product-page">
                {/* THE MENU SECTION HERE */}
                <Menu />
                <br /><br /><br /><br /><br /><br />
                <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                    Library
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Data</Breadcrumb.Item>
                </Breadcrumb>
                <br /><br />
                {/* PRODUCT DESCRIPTION SECTION */}
                <Container className="product-description-section">
                    <Row>
                    <Col sm={6} className="im-slider">
                      <Carousel>
                          <Carousel.Item>
                              <img src={first} height="570px" width="100%" alt="anasa product "/>
                          </Carousel.Item>
                          <Carousel.Item>
                              <img src={ibra} height="570px" width="100%" alt="anasa product "/>
                          </Carousel.Item>
                          </Carousel>  
                    </Col>
                    
                    <Col sm={6} className="product-details">
                        <h1 id="product-title">Oil painting by Ibrahim</h1>
                        <h1 id="product-price">$350.00</h1>
                        <h5 id="category">Category: Paintings</h5>
                        <h5 id="availability">Availability: In stock</h5>
                        <br /><br />
                        <hr />
                        <p id="details">This oil painting is just stunning. The immense detail in it tells a story that could last a thousand lifetimes. Gets your mind wondering and traveling the deeper you look at it.</p>
                        <br /><br /><br />
                        <Button id="add-to-cart"> ADD TO CART</Button>
                        <br />
                        <br />
                        <div className="social-icons">
                            <img src={facebook} />
                            <img src={insta} />
                            <img src={twitter}  />
                            </div>                       
                    </Col>
                    </Row>
                   
                </Container>
                {/* PRODUCT DESCRIPTION ENDS HERE */}
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                {/* DESCRIPTION AND BEST SELLERS SECTION STARTS HERE */}
                <Container className="description-best-sellers-section">
                <ButtonToolbar>
                    <Button variant="primary">Specifications</Button>
                    <Button variant="light">Reviews</Button>
                   
                </ButtonToolbar>
                <br />
                    <div className="specifications">
                        <p>Weight: &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1kg</p>
                        <hr />
                        <p>Quality checking: &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; yes</p>
                        <hr />
                        <p>Authenticity: &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;From original painter</p>
                        <hr />
                        <p>Creation Year:&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2019</p>
                        <hr />
                        <p>Packaging:&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; delicate</p>
                        
                    </div>
                    <br />
                    <br />
                    <h1 style={{padding: '55px'}}>Other Paintings You might like</h1>
                    <CardDeck>
                        <Col sm={4}>
                        <Card className="card">
                        <Card.Img variant="top" src={afro} />
                        <Button variant="dark" >Shop Now</Button>
                        <Card.Title>Price: $450</Card.Title>
            
                        </Card>
                        </Col>  
                    
                    <Col sm={4}>
                    <Card className="card" >
                        <Card.Img variant="top" src={woman}/>
                        <Button variant="dark" >Shop Now</Button>
                        <Card.Title>Price: $500</Card.Title>
                        </Card>

                    </Col>
                    <Col>
                    <Card className="card" >
                        <Card.Img variant="top" src={download} />
                        <Button variant="dark" >Shop Now</Button>
                        <Card.Title>Price: $400</Card.Title>
            
                        </Card>
                    </Col>         
                    
              
                    </CardDeck>
                </Container>
                {/* DESCRIPTION AND BEST SELLERS ENDS HERE */}
                    <br />
                    <br /><br /><br />
                {/* CALL TO ACTION  */}
                <Container className="call-to-action-and-social-ims">
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
                {/* CALL TO ACTION ENDS HERE */}

                {/* FOOTER SECTION */}
                <Footer />
            </div>
        )
    }
}