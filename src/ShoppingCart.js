import React, { Component } from 'react'
import Menu from './components/Menu'
import { Table, Container, Media, Button } from 'react-bootstrap'

import Footer from './components/Footer'
import { Breadcrumb } from 'react-bootstrap'
import axios from 'axios'

export default class ShoppingCart extends Component {

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

    render() {

        if(this.state.isLoaded){
            console.log(this.state.product)
            return (
                <div className="shoping-cart">
                    <Menu />
    
                    <br /><br /><br /><br />
                    {/* THE BREADCRUMB SECTION */}
                    <Breadcrumb>
                        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                            {this.state.product.acf['category']}
                    </Breadcrumb.Item>
                        <Breadcrumb.Item active>cart</Breadcrumb.Item>
                    </Breadcrumb>
                    <br /><br />
                    {/* CART TABLE SECTION */}
                    <Container>
                        <Table responsive="xs">
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <Media as="li">
                                            <img
                                                width={64}
                                                height={64}
                                                className="mr-3"
                                                src={this.state.product.better_featured_image.media_details.sizes.large.source_url}
                                                alt="Generic placeholder"
                                            />
                                            <Media.Body>
                                                <h5 dangerouslySetInnerHTML={{__html: this.state.product.title.rendered}}></h5>
                                                <p style={{ width: '250px' }} dangerouslySetInnerHTML={{__html: this.state.product.content.rendered}}></p>
                                            </Media.Body>
                                        </Media></td>
                                    <td>{this.state.product.acf['price']}</td>
                                    <td>1</td>
                                    <td>{this.state.product.acf['price']}</td>
                                </tr></tbody>
                                  <br /><br /><br />
                           
                            <tbody>
                            <tr>
                                <td>
                                </td>
                                <td></td>
                                <td><Button variant='primary' style={{ padding: '20px' }} onClick={
                                    () =>{
                                        window.location.href="/"
                                    }
                                }>Continue Shopping </Button></td>
                                <td><Button variant='danger' style={{ padding: '20px' }} onClick={
                                    () =>{
                                        window.location.href="/checkout"
                                    }
                                }>Continue Order</Button></td>
                            </tr>
                            </tbody>
                            
                        </Table>
    
    
                    </Container>
                    {/* CART TABLE SECTION ENDS HERE */}
                    <br /><br />
                    {/* FOOTER SECTION */}
                    <Footer />
    
                </div>
            )
        }

        return null
       
    }
}