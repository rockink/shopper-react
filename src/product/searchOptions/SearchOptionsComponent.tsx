import React, { Component } from 'react';
import searchComponentService, { Filter } from './SearchComponentService';


interface SearchFilterProps { filter: Filter }
const SearchFilterComponent = (props: SearchFilterProps) => {
    const { filter } = props;
    return (
        <div className="SearchFilter">
            <h4>{filter.name}</h4>
            {
                filter.filterOptions.map((brand, i) => <li key={i}>{brand.key} ({brand.count})</li>)
            }
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