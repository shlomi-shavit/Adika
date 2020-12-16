
import React from 'react';

// Styles
import classes from './header.module.scss';

// Components
import Menu from './menu/menu';
import SideMenu from './side-menu/side-menu';

import kallesLogo from '../../images/kalles.svg';

const Header = () => {

    return (
        <header>
            <div className={classes.logo}>
                <img src={kallesLogo} alt="Kalles Logo" />
            </div>

            <Menu />

            <SideMenu />
        </header>
    );
};

export default Header;