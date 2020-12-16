
import React, { useState } from 'react';

// Json
import ProductsListData from '../../json/ProductsList';

// kallesLogo (for broken image link)
import kallesLogo from '../../images/kalles.svg';

// Styles
import classes from './products.module.scss';

// Components
import FilterMenu from '../filterMenu/filterMenu';

const Products = () => {

    // Difault image
    const addDefaultSrc = (e) => {
        e.target.src = kallesLogo
        e.target.className = classes.broken
    }

    // Filter Handler - not finished
    /*--------------------------------------------------------------------------------------------------------------------------------------------------*/
    const [filtersList, setFiltersList] = useState([]);

    const filterHandler = (value) => {
        filtersList.push(value);
        setFiltersList(filtersList);
        toggleMenu();
        ProductsList();
        console.log(filtersList);
    }

    // Products Dom
    const ProductsListEntries = Object.entries(ProductsListData)

    const ProductsList = () => {

        let newProductList = [];
        const productList = newProductList.length === 0 ? ProductsListEntries : newProductList;

        return productList.map(item => {

            // todo: make dynamic filter by color / size / brand / ...

            const filter = filtersList.length !== 0 ? item[1].colors.some(r => filtersList.includes(r)) : true;

            if (filter) {
                newProductList.push(item);

                return (
                    <li key={item[0]}>
                        <div className={classes.image}>
                            <img onError={addDefaultSrc} src={item[1].images} />
                        </div>
                        <div className={classes.content}>
                            <div className={classes.title}>{item[1].name}</div>
                            <div className={classes.price}>${item[1].price}</div>
                        </div>
                    </li>
                )
            }

        })
    }
    /*--------------------------------------------------------------------------------------------------------------------------------------------------*/

    // Products grid handler
    const [grid, setGrid] = useState('');

    // Active grid class
    const [activeClass, setActiveClass] = useState('');

    // Filter menu Toggle
    const toggleMenu = () => {
        setActiveClass(activeClass === '' ? 'active' : '')
    }

    return (
        <div>
            <div className={`${classes.header} ${activeClass}`}>

                <button onClick={toggleMenu}>Filter</button>

                <div className={classes.display_mode}>
                    <div className={`${classes.twoColumn} ${grid === classes.twoColumn ? classes.active : ''}`} onClick={() => setGrid(classes.twoColumn)}><span></span><span></span></div>
                    <div className={`${classes.threeColumn} ${grid === classes.threeColumn ? classes.active : ''}`} onClick={() => setGrid(classes.threeColumn)}><span></span><span></span><span></span></div>
                    <div className={`${classes.fourColumn} ${grid === classes.fourColumn ? classes.active : ''}`} onClick={() => setGrid(classes.fourColumn)}><span></span><span></span><span></span><span></span></div>
                </div>

                <FilterMenu getFiltersVal={filterHandler} />

            </div>

            <div className={`${classes.container} ${grid}`}>
                {ProductsList()}
            </div>
        </div>
    );
};

export default Products;