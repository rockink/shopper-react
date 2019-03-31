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
import navigationService from './appBar/navigationComponents/NavigationService';
import { ReactRouterProp } from './Utils';

const NotImplemented = (props: ReactRouterProp) => <div><h1>NOT IMPLEMENTED</h1></div>


/**
 * Nav is a function that shows which page  
 * the user is visiting right now. 
 * 
 * Based on navItem, if checks whether it is a static menu
 * or the dynamic menu. Based on it, it changes the 
 * menu context. 
 * 
 * @param component 
 * @param navItem 
 */
const nav=(component: any, navItem: string)=>{
  console.log("nav", navItem)
  navigationService.setSelected(navItem)
  return component;
}

class App extends Component {
  
  render() {
    console.log("pc", ProductDetailComponent)
    return (
      <Router>
        <AppBar />
        <div className="App">
           {/* deisgned to use render method,component 
              is pretty generic and not satisfactory 
              to pass the pros
              in the upstream components. */}
          <Route exact path="/product/:id" render={(props) => nav(<ProductDetailComponent  {...props}  />, "PRODUCT")} />
          <Route exact path="/cart" render={(props) => nav(<CartComponent />, "CART")} />
          <Route exact path="/dev" render={(props) => nav(<NotImplemented {...props}/>, "DEV")} />
          <Route exact path="/" render={(props) => nav(<PaginationProducts  {...props}/>, "HOME")} />
        </div>
      </Router>
    );
  }
}

export default App;
