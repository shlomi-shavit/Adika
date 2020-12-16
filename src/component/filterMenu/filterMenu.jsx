
import React, { useState } from 'react';

// Json
import Colors from '../../json/Colors';
import Sizes from '../../json/Sizes';

// Styles
import classes from './filterMenu.module.scss';

const FilterMenu = (props) => {

    // Colors categories DOM
    const colorsEntries = Object.entries(Colors);
    const colorList = <div className={classes.filter_wraper}>
        <h3>By Color</h3>
        <ul>
            {colorsEntries.map(color => {
                return (
                    <li key={color[1]} onClick={() => props.getFiltersVal(color[1])}>
                        <span className={color[1]}></span>{color[1]}
                    </li>)
            })}
        </ul>
    </div>

    // Sizes categoies DOM
    const sizesEntries = Object.entries(Sizes);
    const sizesList = <div className={classes.filter_wraper}>
        <h3>By Size</h3>
        <ul>
            {sizesEntries.map(size => {
                return (
                    <li key={size[1]}>
                        <label>
                            <input
                                type="checkbox"
                                onClick={() => props.getFiltersVal(size[1])}
                            />
                            {size[1]}
                        </label>
                    </li>)
            })}
        </ul>
    </div>

    const filterHandler = () => {

    }

    return (
        <div className={classes.dashboard}>

            {colorList}
            {sizesList}

        </div>
    );
};

export default FilterMenu;