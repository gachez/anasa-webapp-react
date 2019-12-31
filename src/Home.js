import React, { Component } from 'react';
import './Home.css'
import menu from './images/menu.png'
import close from './images/cancel.png'
import Menu from './components/Menu.js'
import Hero from './components/Hero.js'
import afroart from './images/afroart.jpg'
import afro from './images/afro.jpg'
import ibrahim from './images/ibrahim-al-salahi.png'
import stars from './images/star.png'


export default class Home extends Component {

  state={
    isLoaded: false,
    dropMenu: 'none',
    menuIcon: menu
  }

  componentDidMount(){
    this.setState({
      isLoaded: true
    })
  }

  toggleMenu = () =>{
    this.state.dropMenu === 'none' ? this.setState({dropMenu: 'grid'}) : this.setState({dropMenu: 'none'})
    this.state.menuIcon === menu ? this.setState({menuIcon: close}) : this.setState({menuIcon: menu})
  }

  render(){
    if(this.state.isLoaded){


      return (
        <div className="Homepage" id="home-page">
    
          {/* menu */}
          <Menu dropDown={this.state.dropMenu} toggler={this.toggleMenu} icon={this.state.menuIcon}/>
    
          {/* hero image slider */}
         <Hero />
    
          {/* this weeks top picks */}
          <section id="top-picks">
            <h1 id="top-picks-heading">Top picks of the week</h1>
            <br />
            <div id="top-picks-images">
               <div style={{backgroundImage: `url(${ibrahim})`}}><button>Shop Now</button></div>
               <div style={{backgroundImage: `url(${afro})`}}><button>Shop Now</button></div>
               <div style={{backgroundImage: `url(${afroart})`}}><button>Shop Now</button></div>
              
              
            </div>
    
          </section>
          <br />
    
          {/* paintings section */}
          <section id="paintings">
            <h1 id="paintings-heading">Paintings</h1>
            <br />
            <div id="paintings-thumbnail">
               <div className="overlay-div" style={{backgroundImage: `url(${ibrahim})`}}>
                  <div className="overlay">
                    <div className="overlay-stars">
                      <img src={stars} alt="stars"/>
                      <img src={stars} alt="stars"/>
                      <img src={stars} alt="stars"/>
                      <img src={stars} alt="stars"/>
                      <img src={stars} alt="stars"/>
                    </div>
                    <p id="price-overlay">$900</p>
                  </div>
               </div>
               <div className="overlay-div" style={{backgroundImage: `url(${afro})`}}>
                  <div className="overlay"></div>
               </div>
               <div className="overlay-div" style={{backgroundImage: `url(${afroart})`}}>
                  <div className="overlay"></div>
               </div>
               <div className="overlay-div" style={{backgroundImage: `url(${ibrahim})`}}>
                  <div className="overlay"></div>
               </div>
             
            </div>
          </section>
          <br />
    
                {/* sculptures section */}
          <section id="sculptures">
            <h1 id="sculptures-heading">Sculptures</h1>
            <br />
            <div id="sculptures-thumbnail">
               <div style={{backgroundImage: `url(${ibrahim})`}}>
                  <div className="overlay-1"></div>
               </div>
               <div style={{backgroundImage: `url(${afro})`}}>
                  <div className="overlay-1"></div>
               </div>
               <div style={{backgroundImage: `url(${afroart})`}}>
                  <div className="overlay-1"></div>
               </div>
               <div style={{backgroundImage: `url(${ibrahim})`}}>
                  <div className="overlay-1"></div>
               </div>
              
            </div>
          </section>
          <br />
    
          <footer>
    
          </footer>
        
        </div>
      );

     
    

    }

    return null

   
  }
}


