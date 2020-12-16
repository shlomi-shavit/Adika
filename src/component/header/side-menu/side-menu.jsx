
import React from 'react';

// Styles
import classes from './side-menu.module.scss';

const SideMenu = () => {

    return (
        <ul className={classes.side_menu}>
            <li>
                <div className={classes.svg}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 184 161"><g stroke="gray" strokeLinecap="round" fill="none"><path strokeLinejoin="round" strokeWidth="9.6511896" d="M149.064 65.447c0 32.776-26.575 59.342-59.342 59.342-32.776 0-59.341-26.566-59.341-59.342S56.946 6.106 89.722 6.106c32.767 0 59.342 26.566 59.342 59.341z" /><path strokeWidth="19.3023792" d="M135.572 110.843l38.523 34.855" /></g></svg>
                </div>
                <span>Search</span>
            </li>
            <li>
                <div className={`${classes.svg} ${classes.mobileHide}`}></div>
                <span>Login / Register</span>
            </li>
            <li>
                <div className={`${classes.svg} ${classes.mobileHide}`}></div>
                <span>Wishlist</span>
            </li>
            <li>
                <div className={classes.svg}></div>
                <span>Cart</span>
            </li>
        </ul>
    );
};

export default SideMenu;