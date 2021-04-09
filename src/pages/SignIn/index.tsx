import React from 'react';
import { 
    Container, 
    Logo,
    Form,
    FormTitle
} from './style';

import imgLogo from '../../assets/desk-logo.png';

const SignIn: React.FC = () => {
    return (
        <Container>
            <Logo>
                <img src={imgLogo} alt="Help Desk"/>
                <h2>Help Desk</h2>
            </Logo>

            <Form>
                <FormTitle>Entrar</FormTitle>
                <input type="text" placeholder="Name"></input>
                <input type="password" placeholder="Senha"></input>
                
                <button type="submit">Acessar</button>
            </Form>
        </Container>
    );
}

export default SignIn