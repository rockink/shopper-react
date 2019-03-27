import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Product } from './product/Domains';
import { ProductsComponent } from './product/components/Product';
import productService from './product/ProductService';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ProductsComponent products={productService.products} />
      </div>
    );
  }
}

export default App;
