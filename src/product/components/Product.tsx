import React from 'react';
import ReactDOM from 'react-dom';
import { Product } from '../Domains';
import Card from '@material-ui/core/Card';
import './product.css';
import { Button, CardActions, CardContent } from '@material-ui/core';



export interface ProductComponentProp { product: Product, key?: any };
export const ProductComponent = (productComponentProp: ProductComponentProp) => (
    <Card className="product-wrapper">
        <div className="product">
            <div className="left-component">
                    <p style={{background: 'rgb(232, 233, 232)', height:'100%', margin: '0px'}}></p>
            </div>
            <CardContent className="right-component">
                <div className="descriptions">
                    <p className="header">{productComponentProp.product.name}</p>
                    <ul className="product-features-list">
                        <li>{productComponentProp.product.cpu} </li>
                        <li>{productComponentProp.product.ram} GB RAM </li>
                        <li>{productComponentProp.product.opSys} Operation System</li>
                    </ul>
                </div>
                <CardActions>
                    <Button variant="contained" color="primary" >Add To Cart</Button>
                    <Button color="primary">View More</Button>
                </CardActions>
            </CardContent>
        </div>
    </Card>
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
