import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './Home';
import ProductPage from './ProductPage'
import ShoppingCart from './ShoppingCart';

const App = () =>{
    
                return(

                             <BrowserRouter>
                                 <Switch>
                                 <Route exact path={"/"} component={Home}></Route>       
                                 <Route exact path={"/product-page"} component={ProductPage}></Route>        
                                 <Route exact path={"/shopping-cart"} component={ShoppingCart}></Route>            
                                 </Switch>
           
            </BrowserRouter>
                      
                        
                                  
                        
        )
    
}

export default App;

