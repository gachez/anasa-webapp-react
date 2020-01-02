import React, { Component} from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

import {Form,FormControl,Button} from 'react-bootstrap'


export default class Footer extends Component{
    render(){
        return(
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
        )
    }

}