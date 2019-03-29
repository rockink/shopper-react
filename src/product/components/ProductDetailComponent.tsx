import React, { Component } from 'react';
import { ProductComponent } from './Product';
import productService from '../ProductService';
import queryString from 'query-string';

import './productDetailComponent.css';

export interface ProductDetailComponentProp{props: any, match: any};

export const ProductDetailComponent = (productDetailComponentProp :ProductDetailComponentProp) => {
    const productId = productDetailComponentProp.match.params.id;
    console.log("product Id ", productId);

    const  product = productService.getProductById(productId)!!;
    
    return (
    <div className="ProductDetailComponent">
        <div className="left-component">
            
        </div>
        <div className="right-component">
            <p className="header">{product.name}</p>
            <hr />
            <p>From {product.company}</p>
            <p>{product.cpu} </p>
            <p>{product.opSys} Operating System</p>
            <p>{product.gpu}</p>
            <p>{product.ram} GB</p>
            <p>{product.storage} Storage</p>
            <b>{product.price}</b>

        </div>
    </div>
)};