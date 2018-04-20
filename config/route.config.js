import React from 'react'
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { Provider } from 'mobx-react';
import stores from './store.config';

import Login from 'views/Login';

const RouteConfig = () => (

    <Provider {...stores}>

        <Router>

            <Switch>

                <Route path="/Login" component={Login}/>

                <Redirect from='*' to='/Login'/>

            </Switch>

        </Router>

    </Provider>
);

export default RouteConfig;