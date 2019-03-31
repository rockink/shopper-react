import React from 'react';
import ReactDOM from 'react-dom';
import cartService, { CartItem } from '../CartService';

import './cartComponent.css';
import { Select, Menu, MenuItem, Button, FormControl, InputLabel } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import { observer } from 'mobx-react';
import { CartItemsComponent } from './CartItemsComponent';
import { CartTotalComponent } from './CartTotalComponent';


export const CartComponent = observer(() => (
    <div className="CartComponent">
        <h1>SHOPPING CART</h1>
        <div className="componnets">
            <CartItemsComponent cartItems={cartService.cart.cartItems} />
            <CartTotalComponent itemsCost={cartService.cart.itemsCost}
                                taxCharge={cartService.cart.taxCharge}
                                totalCharge={cartService.cart.totalCharge} />
        </div>
    </div>
))