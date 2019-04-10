import React, { Component } from 'react';

import { BrowserRouter as Router, Route, match, Link } from "react-router-dom";
import queryString from 'query-string';
import productService from '../ProductService';
import { ProductsComponent } from './Product';

import './productPagination.css';

export interface ReactRouterMatch { match: match }
export const PaginationProducts = (props: ReactRouterMatch) => {
  var pageParam = queryString.parse(location.search) as any;
  const pageIndex = pageParam.page;

  // products is observable, therefore, this will automatically 
  // be refreshed once the data changes. 
  const products = productService.products;

  return (
  <div className="PaginationProducts">
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
          {index == page ? <a>{index}</a> : <Link to={`/?page=${index}`}>{index}</Link>}
        </p>))}
      </div>);
    }
  }