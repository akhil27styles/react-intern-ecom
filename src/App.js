import React from 'react'
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Navbar from "./Components/Navbar"
import Banner from "./Components/Banner"
import ProductsContextProvider from './Global/ProductsContext'
import Products from './Components/Products'
import Cart from './Components/Cart'
import Notfound from './Components/Notfound'
import CartContextProvider from './Global/CartContext'
const App = () => {
  return (
    <div>
 <ProductsContextProvider>
   <CartContextProvider>
   <Router>
   {/* <Navbar/> */}
     <Switch>
       <Route path="/" exact component={Products}/>
       <Route path="/cart" exact component={Cart}/>
       <Route component={Notfound}/>
     </Switch>
   </Router>
   </CartContextProvider>
      </ProductsContextProvider>
    </div>
  );
}

export default App;
