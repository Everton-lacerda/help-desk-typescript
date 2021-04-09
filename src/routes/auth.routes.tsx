import React from 'react';
import {Switch, Route} from 'react-router-dom' 
import SignIn from './../pages/SignIn/index';
import SignUp from './../pages/SignUp/index';

const AuthRoutes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/register" exact component={SignUp} />
    </Switch> 
);

export default AuthRoutes;