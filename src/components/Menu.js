import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import {Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap'
import '../styles-css/component-styles/Menu.css'
import cart from '../images/shopping-cart.png'

export default class Menu extends Component{
    render(){

        return(
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
        )

    }
}
