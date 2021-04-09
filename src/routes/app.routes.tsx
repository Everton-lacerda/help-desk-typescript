import React from 'react';
import {Switch, Route} from 'react-router-dom' 
// import SignIn from './../pages/SignIn/index';
// import SignUp from './../pages/SignUp/index';
import Dashboard from './../pages/Dashboard/index';

const AppRoutes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Dashboard} />
    </Switch> 
);

export default AppRoutes;