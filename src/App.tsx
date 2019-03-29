import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Product } from './product/Domains';
import { ProductsComponent } from './product/components/Product';
import productService from './product/ProductService';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ProductDetailComponent } from './product/components/ProductDetailComponent';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/product/:id" component={ProductDetailComponent} />
          <Route exact path="/" render={()=> <ProductsComponent products={productService.products} />} />
        </div>
      </Router>
    );
  }
}

export default App;
