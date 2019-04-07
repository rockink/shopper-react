import React from 'react';
import ReactDOM from 'react-dom';
import { Product } from '../Domains';
import Card from '@material-ui/core/Card';
import './product.css';
import { Button, CardActions, CardContent } from '@material-ui/core';

import { Link } from 'react-router-dom';

import Chip from '@material-ui/core/Chip';
import cartService from '../../cart/CartService';
import { observer } from 'mobx-react';


export interface ProductComponentProp { product: Product, key?: any };
export const ProductComponent = (productComponentProp: ProductComponentProp) => (
    <Card className="product-wrapper">
        <div className="product">
            <div className="left-component">
                    {/* <p style={{background: 'rgb(232, 233, 232)', height:'100%', margin: '0px'}}></p> */}
                    <img className="laptopImage" src={'/laptop.jpg'} height='100%' />
            </div>
            <CardContent className="right-component">
                <div className="descriptions">
                    <p className="header">{productComponentProp.product.name}</p>

                    <div className="product-chips">
                        <Chip label={`${productComponentProp.product.ram} GB`}  />
                        <Chip label={`${productComponentProp.product.company}`}  />
                        <Chip label={`${productComponentProp.product.storage}`}  />
                        
                    </div>
                    <p className="product-features-list">
                        {productComponentProp.product.opSys} Operating System
                    </p>

                    <h1>${productComponentProp.product.price}</h1>

                </div>
                <CardActions>
                    <Button className="material-button add-cart" 
                            onClick={()=>cartService.addProductToCart(productComponentProp.product)}
                            variant="contained" 
                            color="primary" >Add To Cart</Button>
                    <Link to={`/product/${productComponentProp.product.id}`}>
                        <Button className="material-button view-more" color="primary">View More</Button>
                    </Link>
                </CardActions>
            </CardContent>
        </div>
    </Card>
)

export interface ProductsProps { products: Product[] }
export const ProductsComponent = observer ((productProps: ProductsProps) => (
    <div className="ProductsComponent">
        <h1>Browse the Products</h1>
        {
            productProps.products
                .map((product, i) => <ProductComponent product={product} key={i} />)
        }
    </div>
))
