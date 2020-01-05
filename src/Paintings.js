import React, {Component} from 'react'
import Menu from './components/Menu'
import {Carousel, CardDeck,Col,Card,Button} from 'react-bootstrap'
import axios from 'axios'
import elephantgreen from './images/elephant-green.jpg'
import forest from './images/vouri.jpg'

 

export default class Painting extends Component{

    state={
        isLoaded: false,
        paintings: []
    }


    componentDidMount(){
        axios.get('https://anasaventures.com/dashboard/wp-json/wp/v2/paintings?_embed')
        .then((res) => {
            this.setState({
                paintings: res.data,
                isLoaded: true
            })
        })
    }

    render(){

        if(this.state.isLoaded){


        return(
            <div className="Paintings">
                <Menu />
                <br /><br /><br />
                {/* THE CAROUSEL SECTION */}
                <Carousel>
                    <Carousel.Item style={{height: '50vh'}}>
                        <img
                        className="d-block w-100"
                        src={elephantgreen}
                        style={{objectFit: 'cover', objectPosition: 'bottom'}}
                        alt="painting category"
                        />
                        <Carousel.Caption>
                        <h1 style={{fontWeight: 'bold', color: 'black'}}>Paintings</h1>
                        <p style={{fontStyle: 'italic', fontSize: '24px', color: 'black'}} >
                            "Paintings have a life of their own that derives from the painter's soul." - Vincet Van Gogh
                        </p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item style={{height: '50vh'}}>
                        <img
                        className="d-block w-100"
                        src={forest}
                        style={{objectFit: 'cover', objectPosition: 'bottom', color: 'black'}}
                        alt="painting category"
                        
                        />
                        <Carousel.Caption>
                        <h1 style={{fontWeight: 'bold', color: 'bold'}}>Paintings</h1>
                        <p style={{fontStyle: 'italic', fontSize: '24px'}}>
                            "Art washes away from the soul the dust of everyday life." - Pablo Picasso
                        </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <br /><br /><br /><br />
                {/* GRID SECTION FOR PAINTINGS START HERE */}
                
                <CardDeck>

                {/* MAP THE PAINTING IMAGES  */}
                {

                    this.state.paintings.map(painting => {
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


                </CardDeck>




            </div>
        )
        }

        return null

    }
}