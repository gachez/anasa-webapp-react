import React from 'react';
import '../Menu.css'
import cart from '../images/shopping-cart.png'
import search from '../images/magnifying-glass.png'



const Menu = (props) =>{
    
                return(
          
          <nav className="menu" id="menu">
            <p id="logo">anasa</p>
            <p id="home">Home</p>
            <p id="explore">Explore</p>
            <p id="about">About</p>
            <p id="contact">Contact</p>
            <div id="cart">
              <p className="cart-number">1</p>
              <img src={cart} alt="cart icon"/>
            </div>
            <img id="search" src={search} alt="search icon"/>
            <img id="menu-icon" src={props.icon} alt="anasa menu" onClick={props.toggler}/>

    
            <div className="dropdown" id="drop-menu-list" style={{display: props.dropDown}}>
              <p>Home</p>
              <p>Explore</p>
              <p>About</p>
              <p>Contact</p>
              
              <div id="cart-search">
                <div>1</div>
              <img id="cart-icon" src={cart} alt="cart icon"/>
            
              </div>
              
            </div>
          </nav>                        
        )
    
}

export default Menu;

