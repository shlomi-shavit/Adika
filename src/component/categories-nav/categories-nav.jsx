import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

// Json
import CategoriesList from '../../json/CategoriesList';

// Styles
import classes from './categories-nav.module.scss';

const CategoriesNav = () => {

    const [activeClass, setActiveClass] = useState('');

    const toggleMenu = () => {
        setActiveClass(activeClass === '' ? `${classes.active}` : '')
    }

    const [categoryTitle, setCategoryTitle] = useState('Collections');

    const getCategoryTitle = (title) => {
        setCategoryTitle(title.target.innerHTML)
    }

    const CategoriesLinks = (
        <nav>
            {CategoriesList.map(category => {
                return <NavLink key={category.categoryID} activeClassName={'active'} to={category.categoryName} onClick={getCategoryTitle}>{category.categoryName}</NavLink>
            })}
        </nav>
    )


    return (
        <div>
            <div className={`${classes.categories_links} ${activeClass}`}>

                <button className={classes.categories_btn} onClick={toggleMenu}>
                    Categories
                <div className={classes.arrow}></div>
                </button>

                {CategoriesLinks}

            </div>

            <div className={classes.categories_image}>
                <div className={classes.categories_content}>
                    <h1>{categoryTitle}</h1>
                    <p>Shop through our latest selection of Women’s Clothing and Accessories</p>
                </div>
            </div>
        </div>
    );
};

export default CategoriesNav;