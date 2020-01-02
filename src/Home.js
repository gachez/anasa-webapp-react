import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import {Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import {Card, CardDeck,Col} from 'react-bootstrap'
import './styles-css/Home.css'
import cart from './images/shopping-cart.png'
import hero from './images/hero-image.jpg'
import humble from './images/humble.jpg'
import sculpture from './images/woman-african-people-black-girl-female.jpg'
import first from './images/first.jpg'
import afroart from './images/afroart.jpg'
import ibrahim from './images/ibrahim-al-salahi.png'
import woman from './images/womanology.jpg'

import afro from './images/afro.jpg'
import download from './images/download.jpeg'
import village from './images/interesting-village-cultural-african-wallpaper-preview.jpg'
import wooden from './images/wooden-mask-africa-carved-figure.jpg'
import modern from './images/Modern_Makonde_carving_in_ebony.jpg'
import painter from './images/08f180dd1ec69f11f72c2b4db0eca7b0.jpg'

import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";




export default class Home extends Component {

  state={
    isLoaded: false
  }

  componentDidMount(){
    this.setState({
      isLoaded: true
    })
  }


  render(){
    if(this.state.isLoaded){


      return (
        <div className="Homepage" id="home-page">
          
          {/* MENU SECTION STARTS HERE : THIS IS A RESPONSIVE NAVBAR IMPORTED FROM BOOTSTRAP */}
          <Navbar collapseOnSelect expand="lg" className="menu" fixed="top">
            <Navbar.Brand href="#home">Anasa</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
              <NavDropdown title="Explore" id="collasible-nav-dropdown" className="explore">
                  <NavDropdown.Item href="#action/3.1">Paintings</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Sculptures</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Apparel</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Support</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#features" className="about">About</Nav.Link>
                <Nav.Link href="#pricing" className="contact">Contact</Nav.Link>

              </Nav>
              <Nav>
                <Nav.Link href="#deets" id="cart-icon-container">
                  <img src={cart} id="cart-icon" alt="anasa cart"/>
                  <p id="cart-number">1</p>
                </Nav.Link>
        
                <Form inline>
                  <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                  <Button variant="dark">Search</Button>
                 </Form>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          {/* MENU SECTION ENDS HERE */}


          {/* HERO SECTION STARTS HERE: THIS IS BASICALY A CAROUSEL OF 3 SLIDES THAT SHOW WHAT THE WEBSITE IS ABOUT */}
          <Carousel id="hero-img">
            <Carousel.Item>
              <img
                className="hero-images d-block w-100 h-70"
                src={hero}
                alt="beautiful African art"
              />
              <Carousel.Caption className="hero-caption">
                <h3>The Best collection of beautiful African Art</h3>
                <p>One stop shop for all your artistic needs</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="hero-images d-block w-100 h-70"
                src={humble}
                alt="beautiful African Art"
              />

              <Carousel.Caption className="hero-caption">
                <h3>The Best collection of beautiful African Art</h3>
                <p>One stop shop for all your artistic needs</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                id="last"
                className="hero-images d-block w-100 h-70"
                src={sculpture}
                alt="beautiful African Art"
              />

              <Carousel.Caption className="hero-caption">
                <h3>The best collection of beautiful African Art</h3>
                <p>One stop shop for all your artistic needs</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          
          {/* HERO SECTION ENDS HERE */}
          <br /><br />
          {/* TOP PICKS SECTION STARTS HERE */}
          <h1 style={{padding : '55px'}}>Top picks of the week</h1>
          <CardDeck>
            <Card className="card">
              <Card.Img variant="top" src={first} />
              <Button variant="light" id="first-btn" className="shop-btn">Shop Now</Button>
            
 
            </Card>
            <Card className="card">
              <Card.Img variant="top" src={afroart} />
              <Button variant="light" className="shop-btn">Shop Now</Button>
 
            </Card>
            <Card className="card">
              <Card.Img variant="top" src={ibrahim} />
              <Button variant="light" className="shop-btn">Shop Now</Button>
             
            
            </Card>
          </CardDeck>

          {/* TOP PICKS SECTION ENDS HERE */}
          <br /><br/>
          {/* PAINTINGS SECTION STARTS HERE */}
          <h1 style={{padding: '55px'}}>Paintings</h1>
            <CardDeck>
            <Col sm={4}>
            <Card className="card">
              <Card.Img variant="top" src={afro} />
              <Button variant="dark" className="shop-btn">Shop Now</Button>
            
 
            </Card>
            </Col>  
           
           <Col sm={4}>
           <Card className="card" >
              <Card.Img variant="top" src={woman}/>
              <Button variant="dark" className="shop-btn">Shop Now</Button>
 
            </Card>

           </Col>
           <Col>
           <Card className="card" >
              <Card.Img variant="top" src={download} />
              <Button variant="dark"  className="shop-btn">Shop Now</Button>
            
 
            </Card>
           </Col>         
           
           <Col sm={4}>
           <Card className="card">
              <Card.Img variant="top" src={painter} />
              <Button variant="dark" className="shop-btn">Shop Now</Button>
 
            </Card>
           </Col>
           
          </CardDeck>
            
          
          {/* PAINTINGS SECTION ENDS HERE */}
          <br /><br />
          
          {/* SCULPTURES SECTION STARTS HERE */}
             <h1 style={{padding: '55px'}}>Sculptures</h1>
            <CardDeck>
            <Col sm={4}>
            <Card className="card">
              <Card.Img variant="top" src={village} />
              <Button variant="dark"  className="shop-btn sculpt">Shop Now</Button>
            
 
            </Card>
            </Col>  
           
           <Col sm={4}>
           <Card className="card" sm={4}>
              <Card.Img variant="top" src={modern} />
              <Button variant="dark" className="shop-btn sculpt">Shop Now</Button>
 
            </Card>

           </Col>
           <Col sm={4}>
           <Card className="card" >
              <Card.Img variant="top" src={wooden}/>
              <Button variant="dark" className="shop-btn sculpt">Shop Now</Button>
             
            
            </Card>
           </Col>
                     
         
          </CardDeck>
          {/* SCULPTURES SECTION ENDS HERE */}
          <br /><br /><br /><br />
          {/* THE FOOTER SECTION STARTS HERE */}
            <MDBFooter  className="font-small pt-4 mt-4 footer">
              <MDBContainer fluid className="text-center text-md-left" style={{marginLeft: '2rem' }}>
                <MDBRow>
                  <MDBCol md="4">
                    <h5 className="title">Subscribe to our Newsletter</h5>
                    <Form inline  id="form">
                  <FormControl type="text" placeholder="Subscribe" className="mr-sm-2" />
                  <Button style={{backgroundColor: 'blue', color: 'white'}}>Subscribe</Button>
                 </Form>
                  </MDBCol>

                  <MDBCol md="4">
                    <h5 className="title">Quick links</h5>
                    <ul  id="links">
                      <li className="list-unstyled">
                        <a href="#!" style={{color:'white'}}>Explore</a>
                      </li>
                      <li className="list-unstyled">
                        <a href="#!" style={{color:'white'}}>About</a>
                      </li>
                      <li className="list-unstyled">
                        <a href="#!" style={{color:'white'}}>Contact</a>
                      </li>
                    </ul>
                  </MDBCol>


                  <MDBCol md="4">
                    <h5 className="title">Contact details</h5>
                    <ul  id="contdets">
                      <li className="list-unstyled">
                        <a href="#!" style={{color:'white'}}>Tel: 07000000</a>
                      </li>
                      <li className="list-unstyled">
                        <a href="#!" style={{color:'white'}}>Email: info@anasaventures.com</a>
                      </li>
                      <li className="list-unstyled">
                        <a href="#!" style={{color:'white'}}>Support: support@anasaventures.com</a>
                      </li>
                    </ul>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
              <div className="footer-copyright text-center py-3" id="copy">
                <MDBContainer fluid>
                  &copy; {new Date().getFullYear()} Copyright: <a href="#" style={{color: 'aliceblue'}}>anasaventures.com </a>
                </MDBContainer>
              </div>
            </MDBFooter>

          {/* THE FOOTER SECTION ENDS HERE */}

        </div>
      );

     
    

    }

    return null

   
  }
}


