import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import {Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import './styles-css/Home.css'
import cart from './images/shopping-cart.png'
import hero from './images/hero-image.jpg'
import humble from './images/humble.jpg'
import sculpture from './images/woman-african-people-black-girl-female.jpg'

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
          <Navbar collapseOnSelect expand="lg" className="menu">
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

        </div>
      );

     
    

    }

    return null

   
  }
}


