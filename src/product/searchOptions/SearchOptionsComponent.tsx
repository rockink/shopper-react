import React, { Component, useState } from 'react';
import searchComponentService, { Filter } from './SearchComponentService';

import './SearchOptionComponent.css';
import { Icon } from '@material-ui/core';

interface SearchFilterProps { filter: Filter }
interface SearchFilterState{isOpen: false}

const SearchFilterComponent = (props: SearchFilterProps) => {
    const { filter } = props;
    const [state, setToggleOn] = useState({isOpen: false});
    const [selectedState, setSelected] = useState<boolean[]>([]);
    const icon = state.isOpen ? "minimize": "add";
    return (
        <div className="SearchFilter">
            <div className="header">
                <p>{filter.name}</p>
                <p onClick={e=>setToggleOn({isOpen: !state.isOpen})} className="header-icon"><Icon>{icon}</Icon></p>
            </div>
            <div className={`filterOptions ${state.isOpen?"filter-open":"filter-close"}`}>
                <ul className="filter-list">
                    {filter.filterOptions.map((brand, i) => (
                        <li key={i} onClick={e=>{
                            setSelected(state=>{
                                state[i] = state[i] === undefined ? true : !state[i]
                                return [...state];
                            })}} >

                            <input defaultChecked={selectedState[i]} type="checkbox"  /> {brand.key} ({brand.count})</li>
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