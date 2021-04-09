import React from 'react';
import { 
    Container, 
    Logo,
    Form,
    FormTitle,
    LinkButton
} from './style';

import imgLogo from '../../assets/desk-logo.png';
import Input from '../../components/Input';
import Button from './../../components/Button/index';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
    return (
        <Container> 
            <h1>Dashboard</h1>        
        </Container>
    );
}

export default Dashboard