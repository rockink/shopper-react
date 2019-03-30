import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import productService from '../product/ProductService';
import cartService from './CartService';

import {AppBarCartComponent} from "./AppBarCartComponent";

Enzyme.configure({ adapter: new Adapter() }) 

it('cart should contain 1 item when 1 product is added ', () => {
    const anyProduct = productService.getPaginatedProducts()[0];
    cartService.addProductToCart(anyProduct);

    const wrapper = mount(<AppBarCartComponent />)
    console.log(wrapper.html());

    console.log(wrapper.find(".bottom-right").html());
    expect(wrapper.find(".bottom-right").text()).toBe("1");

    cartService.addProductToCart(anyProduct);
    expect(wrapper.find(".bottom-right").text()).toBe("2");
    

})