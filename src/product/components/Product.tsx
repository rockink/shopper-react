import React from 'react';
import ReactDOM from 'react-dom';
import { Product } from '../Domains';

import './product.css';



export interface ProductComponentProp { product: Product, key?: any };
export const ProductComponent = (productComponentProp: ProductComponentProp) => (
    <div className="product-wrapper">
        <div className="product">
            <div className="left-component">
                    <p style={{background: 'green', height:'100%', margin: '0px'}}></p>
            </div>
            <div className="right-component">
                <h1>{productComponentProp.product.name}</h1>
                <p>
                    {productComponentProp.product.cpu} |
                {productComponentProp.product.ram} |
                {productComponentProp.product.opSys}
                </p>
            </div>
        </div>
    </div>
)

export interface ProductsProps { products: Product[] }
export const ProductsComponent = (productProps: ProductsProps) => (
    <div className="ProductsComponent">
        {
            productProps.products
                .map((product, i) => <ProductComponent product={product} key={i} />)
        }
    </div>
)
