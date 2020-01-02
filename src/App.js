import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './Home';
import ProductPage from './ProductPage'

const App = () =>{
    
                return(

                             <BrowserRouter>
                                 <Switch>
                                 <Route exact path={"/"} component={Home}></Route>       
                                 <Route exact path={"/product-page"} component={ProductPage}></Route>            
                                 </Switch>
           
            </BrowserRouter>
                      
                        
                                  
                        
        )
    
}

export default App;

