import React, { Component, useState } from 'react';
import searchComponentService, { Filter } from './SearchComponentService';

import './SearchOptionComponent.css';
import { Icon } from '@material-ui/core';
import productService from '../ProductService';

interface SearchFilterProps { filter: Filter }

const SearchFilterComponent = (props: SearchFilterProps) => {
    const { filter } = props;

    //whether the filter is expanded or collaped. 
    const [isExpanded, setIsExpanded] = useState(false);

    //delcare the unchecked boxes initially 
    const [selectedState, setSelected] = useState<boolean[]>(new Array(filter.filterOptions.length).fill(false));

    const icon = isExpanded ? "minimize" : "add";
    return (
        <div className="SearchFilter">
            <div className="header">
                <p>{filter.name}</p>
                <p onClick={e => setIsExpanded(!isExpanded)} className="header-icon"><Icon>{icon}</Icon></p>
            </div>
            <div className={`filterOptions ${isExpanded ? "filter-open" : "filter-close"}`}>
                <ul className="filter-list">
                    {filter.filterOptions.map((brand, i) => (
                        <li key={i} onClick={e => {
                            selectedState[i] = !selectedState[i];
                            setSelected(state => [...selectedState]);

                            //tell productService to update the list of selected products only 
                            productService.getOnlySelectedProducts(
                                selectedState.map((isSelected, index) => (isSelected ? filter.filterOptions[index].key : "")).filter(s => s.length > 0)
                            );

                        }} >
                            <p className={selectedState[i] ? "selected" : ""}> {brand.key} ({brand.count}) </p></li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export const SearchOptionsComponent = () => {
    const brandFilter = searchComponentService.brandFilter;
    return (
        <div className="SearchOptions">
            {
                [searchComponentService.brandFilter, searchComponentService.ramFilter]
                    .map((filter, i) => <SearchFilterComponent filter={filter} key={i} />)
            }
        </div>
    );
}