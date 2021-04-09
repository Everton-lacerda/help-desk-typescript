import React from 'react';
import {Switch, Route} from 'react-router-dom' 
import Layout from '../components/Layout';
// import SignIn from './../pages/SignIn/index';
// import SignUp from './../pages/SignUp/index';
import Dashboard from './../pages/Dashboard/index';

const AppRoutes: React.FC = () => (
    <Layout>
        <Switch>
            <Route path="/" exact component={Dashboard} />
        </Switch> 
    </Layout>
);

export default AppRoutes;