import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import cartService from '../CartService';
import productService from '../../product/ProductService';
import { CartComponent } from './CartComponent';
import { CartItemComponent } from './CartItemsComponent';
Enzyme.configure({ adapter: new Adapter() }) 


/**
 * The test for this is to make sure that the components react based on the button actions... 
 * functionalities are provided by the services layer test.. 
 * this one is just about reactives 
 */


 beforeEach(()=>{
    cartService.clearCart();
 })

it(`cart loaded with 1 product, changing qunatity = 2 changes price by 2 times`, () => {
    const product = productService.getPaginatedProducts()[0];
    const cartItem = cartService.addProductToCart(product);
    console.log("cartItem price ", cartItem.price)

    //lets render a view now 
    const component = mount(<CartItemComponent  cartItem={cartItem}  />)
    console.log(component.find(".right-section p").text())
    expect(component.find(".right-section p").text()).toBe(cartItem.price.toFixed(0))

    //lets now change the count 
    const oldPrice = cartItem.price;
    console.log("oldPrice ", oldPrice);
    console.log("compoentText", component.find(".right-section p").text());
    cartService.changeProductCount(product, 3);
    console.log("compoentText update", parseFloat(component.find(".right-section p").text()));
    expect(oldPrice).toBeLessThan(parseFloat(component.find(".right-section p").text()));
    expect(component.find(".right-section p").text()).toBe(cartItem.price.toFixed(0));


})