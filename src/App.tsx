import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Product } from './product/Domains';
import { ProductsComponent } from './product/components/Product';
import productService from './product/ProductService';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ProductDetailComponent } from './product/components/ProductDetailComponent';
import { PaginationProducts } from './product/components/ProductPagination';
import { AppBar } from './appBar/AppBar';
import { CartComponent } from './cart/cartPage/CartComponent';

class App extends Component {
  render() {
    return (
      <Router>
        <AppBar />
        <div className="App">
          <Route exact path="/product/:id" component={ProductDetailComponent} />
          <Route exact path="/cart" component={CartComponent} />
          <Route exact path="/" component={PaginationProducts} />

        </div>
      </Router>
    );
  }
}

export default App;
