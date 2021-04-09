import React from 'react';
import Content from '../Content';
import Header from '../Header';
import Sidebar from '../Sidebar';

import { Grid } from './styles';

const Layout: React.FC = () => {
    return(
        <Grid>
            <Header />
            <Sidebar />
            <Content />
        </Grid>
    )
}

export default Layout;