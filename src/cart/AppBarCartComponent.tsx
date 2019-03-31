import React, { Component } from 'react';

import Icon from '@material-ui/core/Icon';
import './appBarCartComponent.css';

import {observer} from 'mobx-react';

import cartService from '../cart/CartService';
import { Link } from 'react-router-dom';

export const AppBarCartComponent = observer (() => {
    return (
        <div className="AppBarCartComponent">
            <Link className="cart-link" to="/cart">
                <div className="app-barholder">
                    <div className="totalDisplay" >
                        Total: ${cartService.cart.totalCharge}
                    </div>
                    <Icon>shopping_cart</Icon>
                    <div className="bottom-right">
                        {cartService.countAllCartItems}
                    </div>
                </div>
            </Link>
        </div>
    )
})