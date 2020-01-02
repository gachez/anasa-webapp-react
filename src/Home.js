import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import {Card, CardDeck,Col,Button} from 'react-bootstrap'
import './styles-css/Home.css'
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

import Footer from './components/Footer'
import Menu from './components/Menu'




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
          <Menu />
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
              <Button variant="dark" style={{position: 'relative', bottom: '140px'}} className="shop-btn">Shop Now</Button>
            
 
            </Card>
            </Col>  
           
           <Col sm={4}>
           <Card className="card" >
              <Card.Img variant="top" src={woman}/>
              <Button variant="dark" style={{position: 'relative', bottom: '140px'}}className="shop-btn">Shop Now</Button>
 
            </Card>

           </Col>
           <Col>
           <Card className="card" >
              <Card.Img variant="top" src={download} />
              <Button variant="dark"  style={{position: 'relative', bottom: '140px'}} className="shop-btn">Shop Now</Button>
            
 
            </Card>
           </Col>         
           
           <Col sm={4}>
           <Card className="card">
              <Card.Img variant="top" src={painter} />
              <Button variant="dark" style={{position: 'relative', bottom: '140px'}} className="shop-btn">Shop Now</Button>
 
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
              <Button variant="dark" style={{position: 'relative', bottom: '140px'}} className="shop-btn sculpt">Shop Now</Button>
            
 
            </Card>
            </Col>  
           
           <Col sm={4}>
           <Card className="card" sm={4}>
              <Card.Img variant="top" src={modern} />
              <Button variant="dark" style={{position: 'relative', bottom: '140px'}} className="shop-btn sculpt">Shop Now</Button>
 
            </Card>

           </Col>
           <Col sm={4}>
           <Card className="card" >
              <Card.Img variant="top" src={wooden}/>
              <Button variant="dark" style={{position: 'relative', bottom: '140px'}} className="shop-btn sculpt">Shop Now</Button>
             
            
            </Card>
           </Col>
                     
         
          </CardDeck>
          {/* SCULPTURES SECTION ENDS HERE */}
          <br /><br /><br /><br />
          {/* THE FOOTER SECTION STARTS HERE */}
          <Footer />

          {/* THE FOOTER SECTION ENDS HERE */}

        </div>
      );

     
    

    }

    return null

   
  }
}


