import React from 'react';
import ReactDOM from 'react-dom';
import cartService, { CartItem } from '../CartService';

import './cartComponent.css';
import { Select, Menu, MenuItem, Button, FormControl, InputLabel } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import { observer } from 'mobx-react';


const LeftSection = () => (
    <div className="left-section">
        <div className="image-placeholder"></div>
    </div>
);

const MidSection = observer ((props: CartItemProps) => (
    <div className="mid-section">
        <p>{props.cartItem.product.name}</p>
        <div>
            <FormControl>
                <InputLabel>Quantity</InputLabel>
                <Select value={props.cartItem.count} name="Item Count"
                    onChange={event => { cartService.changeProductCount(props.cartItem.product, parseInt(event.target.value)) }}
                    input={<Input id="name-error" />} >
                    {
                        [... new Array(props.cartItem.count + 5)]
                            .map((value, index) => <MenuItem value={index} key={index}>{index}</MenuItem>)
                    }
                </Select>
            </FormControl>
        </div>

        <Button onClick={e => cartService.removeCartItem(props.cartItem)} className="remove-button" variant="contained" color="secondary">REMOVE</Button>

    </div>
))

const RightSection = observer((props: CartItemProps) => (
    <div className="right-section">
        $<p>{props.cartItem.price}</p>
    </div>
))

interface CartItemProps { cartItem: CartItem }
export const CartItemComponent = observer((props: CartItemProps) => (
    <div className="cartItem">
        <LeftSection />
        <MidSection {...props} />
        <RightSection {...props} />
    </div>
))


export interface CartItemsComponentProps { cartItems: CartItem[] }
export const CartItemsComponent = observer((props: CartItemsComponentProps) => (
    <div className="cartItems">
        {
            props.cartItems.map(cartItem => <CartItemComponent cartItem={cartItem} />)
        }
    </div>
));