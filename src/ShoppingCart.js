import React, {Component} from 'react'
import Menu from './components/Menu'
import { Table, Container,Media , Button} from 'react-bootstrap'
import ibrahim from './images/ibrahim-al-salahi.png'
import woman from './images/womanology.jpg'
import Footer from './components/Footer'


export default class ShoppingCart extends Component{
    render(){
        return(
            <div className="shoping-cart">
                <Menu />

                <br /><br /><br /><br /><br />
                {/* CART TABLE SECTION */}
                <Container>
                <Table responsive>
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
                            src={ibrahim}
                            alt="Generic placeholder"
                            />
                            <Media.Body>
                            <h5>Oil painting by Ibrahim</h5>
                            <p style={{width: '250px'}}>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                            </p>
                            </Media.Body>
                        </Media></td>
                        <td>$450</td>
                        <td>1</td>
                        <td>$450</td>
                        </tr>
                        <tr>
                        <td>
                        <Media as="li">
                            <img
                            width={64}
                            height={64}
                            className="mr-3"
                            src={woman}
                            alt="Generic placeholder"
                            />
                            <Media.Body>
                            <h5>Oil painting by abdala</h5>
                            <p style={{width: '250px'}}>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                </p>
                            </Media.Body>
                        </Media>
                        </td>
                        <td>$500</td>
                        <td>2</td>
                        <td>$500</td>
                        </tr>

                        <tr>
                        <td>
                        </td>
                        <td></td>
                        <td style={{fontWeight: 'bold'}}>Subtotal</td>
                        <td>$500</td>
                        </tr>                  
                    </tbody>   <br /><br /><br />
                    <hr />

                    <tr>
                        <td>
                        </td>
                        <td></td>
                        <td><Button variant='primary' style={{padding: '20px'}}>Continue Shopping </Button></td>
                        <td><Button variant='primary' style={{padding: '20px'}}>Continue Order</Button></td>
                        </tr>
                    </Table>
                 
                
                </Container>
                {/* CART TABLE SECTION ENDS HERE */}
                <br /><br />
                {/* FOOTER SECTION */}
                <Footer />
                
                            </div>
        )
    }
}