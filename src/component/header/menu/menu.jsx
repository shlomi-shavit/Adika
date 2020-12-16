
import React, { useState } from 'react';
import {
    NavLink,
    BrowserRouter as Router
} from 'react-router-dom';

// Styles
import classes from './menu.module.scss';

const Header = () => {

    const [activeClass, setActiveClass] = useState('');

    const toggleMenu = () => {
        setActiveClass(activeClass === '' ? `active` : '')
    }

    return (
        <div>
            <div className={classes.btn} onClick={toggleMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="16" viewBox="0 0 30 16"><rect width="30" height="1.5"></rect><rect y="7" width="20" height="1.5"></rect><rect y="14" width="30" height="1.5"></rect></svg>
            </div>

            <Router>
                <div className={activeClass}>

                    <nav className={classes.links}>
                        <NavLink activeClassName={classes.active} to="/demo">Demo</NavLink>
                        <NavLink activeClassName={classes.active} to="/shop">Shop</NavLink>
                        <NavLink activeClassName={classes.active} to="/product">Product</NavLink>
                        <NavLink activeClassName={classes.active} to="/sale">Sale</NavLink>
                        <NavLink activeClassName={classes.active} to="/portfolio">Portfolio</NavLink>
                        <NavLink activeClassName={classes.active} to="/lookbook">Lookbook</NavLink>
                        <NavLink activeClassName={classes.active} to="/blog">Blog</NavLink>

                        <div className={classes.close_btn} onClick={toggleMenu}>x</div>
                    </nav>

                    <div className={classes.background} onClick={toggleMenu}></div>
                </div>
            </Router>

        </div >
    );
};

export default Header;