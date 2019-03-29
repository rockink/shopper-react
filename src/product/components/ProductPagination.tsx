import React, { Component } from 'react';

import { BrowserRouter as Router, Route, match, Link } from "react-router-dom";
import queryString from 'query-string';
import productService from '../ProductService';
import { ProductsComponent } from './Product';


export interface ReactRouterMatch { match: match }
export const PaginationProducts = (props: ReactRouterMatch) => {
  var pageParam = queryString.parse(location.search) as any;
  const pageIndex = pageParam.page;

  // this will hit the action to get the other products.. 
  // we will use this to display the products 
  const products = productService.getPaginatedProducts(pageIndex);

  return (
  <div>
    <ProductsComponent products={products} />
    <PaginationCounter {...props} />
  </div>

)}


export class PaginationCounter extends React.Component<ReactRouterMatch> {
    constructor(prop: ReactRouterMatch) {
      super(prop);
    }
    render() {

      var pageIndex = queryString.parse(location.search) as any;
      const page = pageIndex.page;
    
      return (<div className="PaginationCounter">
        {[0, 1, 2, 3, 4].map(index => (
        <p className={`pagination-index ${index == page ? "selected-pagination-index": ""}`} key={index}>
          <Link to={`/?page=${index}`}>{index}</Link>
        </p>))}
      </div>);
    }
  }