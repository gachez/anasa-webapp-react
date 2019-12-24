import React from 'react';
import './App.css'
import cart from './images/shopping-cart.png'
import search from './images/magnifying-glass.png'

function App() {
  return (
    <div className="Homepage">

      {/* menu */}
      <nav className="menu">
        <p id="logo">anasa</p>
        <p id="home">Home</p>
        <p id="explore">Explore</p>
        <p id="about">About</p>
        <p id="contact">Contact</p>
        <div id="cart">
          <p id="cart-number">1</p>
          <img src={cart} alt="cart icon"/>
        </div>
        <img id="search" src={search} alt="search icon"/>
      </nav>

      {/* hero image slider */}
      <section id="hero-img">
          <div id="hero-text">
            The best collection of beautiful African Art
          </div>
      </section>

      {/* this weeks top picks */}
      <section id="top-picks">
        <h1 id="top-picks-heading">Top picks of the week</h1>
        <div id="top-picks-images">
           <img alt="weekly pick"/>
           <img alt="weekly pick"/>
           <img alt="weekly pick"/>
           <img alt="weekly pick"/>
           <img alt="weekly pick"/>
        </div>

      </section>
    </div>
  );
}

export default App;
