import React from 'react';
import ReactDOM from 'react-dom';
import { Card } from '@material-ui/core';

import './CartTotalComponent.css';
import { observable } from 'mobx';
import { observer } from 'mobx-react';


interface CartTotalComponentProps{itemsCost: string, taxCharge: string, totalCharge: string}
export const CartTotalComponent = (props: CartTotalComponentProps) => (
    <div className="CartTotalComponent">
        <Card className="wrapper">
            <h1>TOTAL</h1>
            <hr />
            <div id="top-tier" className="table">
                <p>Items</p><p>${props.itemsCost}</p>
                <p>Shipping</p><p>${props.taxCharge}</p>
            </div>
            <div id="bottom-tier" className="table">
                <p>Total: </p><p>${props.totalCharge }</p>
            </div>
        </Card>
    </div>
)