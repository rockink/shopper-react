import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import productService from '../product/ProductService';
import cartService from './CartService';

import {AppBarCartComponent} from "./AppBarCartComponent";
import { StaticRouter } from 'react-router';

Enzyme.configure({ adapter: new Adapter() }) 


/**
 * CartService already contains some test cartItems for development purpose. 
 * This clears out the items before starting the test. 
 */
beforeEach(()=>{
    cartService.clearCart();
})

it('cart should contain 1 item when 1 product is added ', () => {
    const anyProduct = productService.getPaginatedProducts()[0];
    cartService.addProductToCart(anyProduct);

    const wrapper = mount(<StaticRouter><AppBarCartComponent /></StaticRouter>)
    console.log(wrapper.html());

    console.log(wrapper.find(".bottom-right").html());
    expect(wrapper.find(".bottom-right").text()).toBe("1");

    cartService.addProductToCart(anyProduct);
    expect(wrapper.find(".bottom-right").text()).toBe("2");
    

})