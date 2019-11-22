import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { createStore } from 'redux';
import Home from './pages/home';
import Details from './pages/details';
import ShoppingCart from './pages/shopping-cart';
import NotFound from './pages/not-found';
import reducer from './reducer';

export default () => {
  const [products, setProducts] = useState([]);
  const globalState = {
    products,
    cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
  };
  const store = createStore(reducer, 'global');

  useEffect(() => {
    fetch('./products.json').then(r => r.json()).then(data => {
      data.forEach(product => globalState.products.push(product));
      setProducts(JSON.parse(JSON.stringify(products)));
    });
  }, []);

  return (
    <Router>
      <Switch>
        <Route component={props => <Home store={store} {...props} {...globalState}/>} path="/" exact/>
        <Route component={props => <Details store={store} {...props} {...globalState}/>} path="/product-details/:id"/>
        <Route component={props => <ShoppingCart store={store} {...props} {...globalState}/>} path="/shopping-cart"/>
        <Route component={props => <NotFound store={store} {...props} {...globalState}/>} />
      </Switch>
    </Router>
  );
}