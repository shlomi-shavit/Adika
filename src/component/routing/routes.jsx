import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Pages components
import HomePage from '../../pages/home-page/home-page';
import WomenPage from '../../pages/women-page/women-page';

const Routes = () => {
    return (
        <Switch>

            <Route exact path="/">
                <HomePage />
            </Route>

            <Route path="/women">
                <WomenPage />
            </Route>

        </Switch>
    );
};

export default Routes;
