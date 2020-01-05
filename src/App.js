import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './Home';
import ProductPage from './ProductPage'
import ShoppingCart from './ShoppingCart';
import Checkout from './Checkout'
import Confirmation from './Confirmation';
import About from './About';
import Contact from './Contact'
import Painting from './Paintings';


const App = () =>{
    
                return(

                             <BrowserRouter>
                                 <Switch>
                                 <Route exact path={"/"} component={Home}></Route>       
                                 <Route exact path={"/product-page"} component={ProductPage}></Route>        
                                 <Route exact path={"/shopping-cart"} component={ShoppingCart}></Route>            
                                 <Route exact path={"/checkout"} component={Checkout}></Route>   
                                 <Route exact path={"/confirmation"} component={Confirmation}></Route>       
                                 <Route exact path={"/about"} component={About}></Route>  
                                 <Route exact path={"/contact"} component={Contact}></Route>    
                                 <Route exact path={"/paintings"} component={Painting}></Route>            

                                 </Switch>
           
            </BrowserRouter>
                      
                        
                                  
                        
        )
    
}

export default App;

