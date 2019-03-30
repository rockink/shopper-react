import React, { Component } from 'react';

import './appbar.css';
import { AppBarCartComponent } from '../cart/AppBarCartComponent';

export const AppBar = () => {
    return (
        <div className="app-bar">
            <div className="app-bar-wrapper">
                <div className="left-column">
                    APP-BAR
                </div> 
                <div className="right-column">
                    <AppBarCartComponent />
                </div>
            </div>
        </div>
    );
}