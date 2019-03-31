import React, { Component } from 'react';

import './appbar.css';
import { AppBarCartComponent } from '../cart/AppBarCartComponent';
import { NavigationComponent } from './navigationComponents/NavigationComponent';

export const AppBar = () => {
    return (
        <div className="app-bar">
            <div className="app-bar-wrapper">
                <div className="left-column">
                    <b>SHOPPER</b>
                    <NavigationComponent />
                </div> 
                <div className="right-column">
                    <AppBarCartComponent />
                </div>
            </div>
        </div>
    );
}