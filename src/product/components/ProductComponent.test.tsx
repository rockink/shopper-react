import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import { ProductsComponent, ProductComponent } from './Product';
import productService from '../ProductService';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() }) 

it('displays all the products ', () => {
    const products = productService.products;
    
    const prouctsCompoent = shallow(<ProductsComponent products={products}/>); 
    expect(prouctsCompoent.find(ProductComponent)).toHaveLength(products.length);
  });

it('display individual product', () => {
    const product = productService.getPaginatedProducts()[0];

    const wrapper = shallow(<ProductComponent product={product}/>);
    expect(wrapper.contains(product.name));
});
  