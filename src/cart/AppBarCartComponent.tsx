import React, { Component } from 'react';

import Icon from '@material-ui/core/Icon';
import './appBarCartComponent.css';

import {observer} from 'mobx-react';

import cartService from '../cart/CartService';

export const AppBarCartComponent = observer (() => {
    return (
        <div className="AppBarCartComponent">
            <div className="app-barholder">
                <Icon>shopping_cart</Icon>
                <div className="bottom-right">
                    {cartService.countAllCartItems}
                </div>
            </div>
        </div>
    )
})