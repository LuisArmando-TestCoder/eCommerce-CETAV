import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

// pages
import Home from './pages/home';
import ProductDetails from './pages/product-details';
import ShoppingCart from './pages/shopping-cart';
import NotFound from './pages/not-found';

export default () => {
  return ( 
    <Router>
      <Switch>
        <Route component={Home} path="/" exact/>
        <Route component={ProductDetails} path="/product-details/:id"/>
        <Route component={ShoppingCart} path="/shopping-cart"/>
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}