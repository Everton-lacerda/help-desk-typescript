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

const SignIn: React.FC = () => {
    return (
        <Container>
            <Logo>
                {/* <img src={imgLogo} alt="Help Desk"/> */}
                <h2>Help Desk</h2>
            </Logo>

            <Form onSubmit={() => {}}>
                <FormTitle>Entrar</FormTitle>
                <Input type="email" placeholder="e-mail"  required />
                <Input type="password" placeholder="senha" required />

                
                <Button type="submit">Acessar</Button>
        
                <LinkButton>
                    <Link to="/register">Criar conta</Link>
                </LinkButton>

            </Form>
            
        </Container>
    );
}

export default SignIn