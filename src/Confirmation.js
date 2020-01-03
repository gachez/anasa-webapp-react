import React, {Component} from 'react'
import Menu from './components/Menu'
import { Container,Col } from 'react-bootstrap'
import './styles-css/Confirmation.css'
import Footer from './components/Footer'


export default class Confirmation extends Component{
    render(){
        return(
            <div className="confirmation-page">
                <Menu />
                <br /><br /><br /><br /><br /><br /><br />
                {/* CONFIRMATION MESSAGE SECTION */}
                 <Container>
                    <Col sm={8}>
                    <h4 className="Thanks">Thank you. Your order has been recieved.</h4>
                    <br /><br /><br />
                    <p id="ps-note">
                        You will recieve an email with full details of your order. Order processing takes not more than 48hrs.
                        You will be contacted with details about your viewing date.
                    </p>

                    </Col>
                 </Container>
                 <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                
                <Footer />
            </div>
        )
    }
}