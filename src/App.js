import React from 'react';
import './App.css'
import cart from './images/shopping-cart.png'
import search from './images/magnifying-glass.png'
import firstpaint from './images/first.jpg'
import afroart from './images/afroart.jpg'
import afro from './images/afro.jpg'
import ibrahim from './images/ibrahim-al-salahi.png'



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
           <div style={{backgroundImage: `url(${ibrahim})`}}>
              <div className="overlay"></div>
           </div>
           <div style={{backgroundImage: `url(${afro})`}}>
              <div className="overlay"></div>
           </div>
           <div style={{backgroundImage: `url(${afroart})`}}>
              <div className="overlay"></div>
           </div>
           <div style={{backgroundImage: `url(${ibrahim})`}}>
              <div className="overlay"></div>
           </div>
           <div style={{backgroundImage: `url(${afro})`}}>
              <div className="overlay"></div>
           </div>
           <div style={{backgroundImage: `url(${afroart})`}}>
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
           <div style={{backgroundImage: `url(${afro})`}}>
              <div className="overlay-1"></div>
           </div>
           <div style={{backgroundImage: `url(${afroart})`}}>
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

export default App;
