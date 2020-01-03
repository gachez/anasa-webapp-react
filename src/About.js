import React, {Component} from 'react'
import Menu from './components/Menu'
import './styles-css/About.css'
import Footer from './components/Footer'

export default class About extends Component{
    

    render(){
        return(
            <div className="About-page">
                <Menu />
                <br /><br /><br /><br />
                 {/* ABOUT BODY SECTION */}
                 <div className="about-body">
                    <p id="about-paragraph">
                        Our vision is to empower local artisans in Kenya and Africa as a whole by giving them  a platform to showcase their artwork and monetise the skills they posess.
                    </p>
                 </div>
                 <br />

                 <Footer />

            </div>
        )
    }
}