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

const SignUp: React.FC = () => {
    return (
        <Container>
            <Logo>
                {/* <img src={imgLogo} alt="Help Desk"/> */}
                {/* <h2>Help Desk</h2> */}
            </Logo>

            <Form onSubmit={() => {}}>
                <FormTitle>Criar Conta</FormTitle>
                <Input type="text" placeholder="nome"  required />
                <Input type="email" placeholder="e-mail"  required />
                <Input type="password" placeholder="senha" required />

                
                <Button type="submit">Registrar</Button>
        
                <LinkButton>
                    <Link to="/">Acessar</Link>
                </LinkButton>

            </Form>
            
        </Container>
    );
}

export default SignUp