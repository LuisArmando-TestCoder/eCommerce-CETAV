import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './pages/home';
import Details from './pages/details';
import ShoppingCart from './pages/shopping-cart';
import NotFound from './pages/not-found';

export default () => {
  const [products, setProducts] = useState([]);
  const globalState = {
    products,
    cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
  };

  if(!products.length) fetch('./products.json').then(r => r.json()).then(data => {
    data.forEach(product => globalState.products.push(product));
    setProducts(JSON.parse(JSON.stringify(products)));
  });

  return (
    <Router>
      <Switch>
        <Route component={props => <Home {...props} {...globalState}/>} path="/" exact/>
        <Route component={props => <Details {...props} {...globalState}/>} path="/product-details/:id"/>
        <Route component={props => <ShoppingCart {...props} {...globalState}/>} path="/shopping-cart"/>
        <Route component={props => <NotFound {...props} {...globalState}/>} />
      </Switch>
    </Router>
  );
}