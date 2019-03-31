import React, { Component } from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import navigationService from './NavigationService';

import "./NavigationComponent.css";
import { Link } from 'react-router-dom';

export const NavigationComponent = observer (() => {

    return (
        <div className="NavigationComponent">
            {
                navigationService.menus
                    .map((menuItem, index) => 
                        <Link to={navigationService.resolveLink(menuItem)} className={`${navigationService.isSelected(menuItem)?"selected":""}`} 
                            key={index}> 
                            {menuItem}  
                        </Link>
                        )
            }
        </div>
    )
})