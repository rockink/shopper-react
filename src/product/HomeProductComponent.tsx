import React, { Component } from 'react';
import { SearchOptionsComponent } from './searchOptions/SearchOptionsComponent';
import { PaginationProducts, ReactRouterMatch } from './components/ProductPagination';

import './HomeProductComponent.css';

/**
 * This is just a wrapper for everything that happens in the Home Product 
 * At this point, it is decided that we will use searchOptions on the left side of the page   
 * and ProductionPagination on the right side of the page. 
 * 
 * The relation between SearchOption and ProductPagination is to allow users with an ability 
 * to filter the product as required 
 */
export const HomeProductComponent = (props: ReactRouterMatch) => (
    <div className="HomeProductComponent">
        <SearchOptionsComponent />
        <PaginationProducts {...props} />
    </div>
)