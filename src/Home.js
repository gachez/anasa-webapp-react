import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import { Card, CardDeck, Col, Button } from 'react-bootstrap'
import axios from 'axios'
import './styles-css/Home.css'
import hero from './images/hero-image.jpg'
import humble from './images/humble.jpg'
import sculpture from './images/woman-african-people-black-girl-female.jpg'
import Footer from './components/Footer'
import Menu from './components/Menu'




export default class Home extends Component {

  state = {
    isLoaded: false,
    paintingsThumbnails: [],
    topPicksThumbnails: [],
    sculpturesThumbnails: []
  }

  componentDidMount() {

    axios.get('https://anasaventures.com/dashboard/wp-json/wp/v2/top?_embed')
    .then((res) => {
      this.setState({
        topPicksThumbnails: res.data
      })
    })
    .catch(err => console.log(err))

      axios.get('https://anasaventures.com/dashboard/wp-json/wp/v2/paintings?_embed')
        .then((res) => {
          this.setState({
            paintingsThumbnails: res.data
          })
        })
        .catch(err => console.log(err))

      this.setState({
        isLoaded: true
      })

      axios.get('https://anasaventures.com/dashboard/wp-json/wp/v2/sculptures?_embed')
      .then((res) =>{
        this.setState({
          sculpturesThumbnails: res.data
        })
      })
      .catch(err => console.log(err))

      localStorage.clear()
  }


  render() {
    if (this.state.isLoaded) {

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
          <h1 style={{ padding: '55px' }}>Top picks of the week</h1>
          <CardDeck>
            {
                this.state.topPicksThumbnails.map(pick => {
                  return(
                    <Card className="card" key={pick.id}>
                    <Card.Img variant="top" src={pick._embedded['wp:featuredmedia']['0'].source_url} />
                    <Button variant="light" id="first-btn" className="shop-btn" onClick={
                      () =>{
                        window.location.href="/product-page"
                        localStorage.setItem('id', pick.id)
                        localStorage.setItem('postname', pick.acf['postname'])
                      }
                    }>Shop Now</Button>
      
      
                  </Card>
                  )
                })
            }
       
         
          </CardDeck>

          {/* TOP PICKS SECTION ENDS HERE */}
          <br /><br />
          {/* PAINTINGS SECTION STARTS HERE */}
          <h1 style={{ padding: '55px' }}>Paintings</h1>
          <CardDeck>

            {/* MAP THE PAINTING IMAGES  */}
            {
            
              this.state.paintingsThumbnails.map(painting => {
                return(
                  <Col sm={4} key={painting.id}>
                  <Card className="card">
                    <Card.Img variant="top" src={painting._embedded['wp:featuredmedia']['0'].source_url} />
                    <Button variant="dark" style={{ position: 'relative', bottom: '140px' }} className="shop-btn" onClick={
                        () =>{

                          window.location.href="/product-page"
                          localStorage.setItem('id', painting.id)
                          localStorage.setItem('postname', painting.acf['postname'])
                        }
                    }>Shop Now</Button>
    
    
                  </Card>
                </Col>
                )
              })
            
            
            }
  

            {/* <Col sm={4}>
              <Card className="card" >
                <Card.Img variant="top" src={woman} />
                <Button variant="dark" style={{ position: 'relative', bottom: '140px' }} className="shop-btn">Shop Now</Button>

              </Card>

            </Col>
            <Col>
              <Card className="card" >
                <Card.Img variant="top" src={download} />
                <Button variant="dark" style={{ position: 'relative', bottom: '140px' }} className="shop-btn">Shop Now</Button>


              </Card>
            </Col>

            <Col sm={4}>
              <Card className="card">
                <Card.Img variant="top" src={painter} />
                <Button variant="dark" style={{ position: 'relative', bottom: '140px' }} className="shop-btn">Shop Now</Button>

              </Card>
            </Col> */}

          </CardDeck>


          {/* PAINTINGS SECTION ENDS HERE */}
          <br /><br />

          {/* SCULPTURES SECTION STARTS HERE */}
          <h1 style={{ padding: '55px' }}>Sculptures</h1>
          <CardDeck>
            {
              this.state.sculpturesThumbnails.map(sculpture =>{
                return(
                  <Col sm={4} key={sculpture.id}>
                  <Card className="card">
                    <Card.Img variant="top" src={sculpture._embedded['wp:featuredmedia']['0'].source_url} />
                    <Button variant="dark" style={{ position: 'relative', bottom: '140px' }} className="shop-btn sculpt" onClick={
                      () =>{

                        window.location.href="/product-page"
                        localStorage.setItem('id', sculpture.id)
                        localStorage.setItem('postname', sculpture.acf['postname'])
                      }
                    }>Shop Now</Button>
    
    
                  </Card>
                </Col>
                )
              })
            }
    

          


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


