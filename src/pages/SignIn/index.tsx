import React from 'react';
import { 
    Container, 
    Logo,
    Form,
    FormTitle
} from './style';

import imgLogo from '../../assets/desk-logo.png';
import Input from '../../components/Input';

const SignIn: React.FC = () => {
    return (
        <Container>
            <Logo>
                <img src={imgLogo} alt="Help Desk"/>
                <h2>Help Desk</h2>
            </Logo>

            <Form onSubmit={() => {}}>
                <FormTitle>Entrar</FormTitle>
                <Input type="email" placeholder="e-mail"  required />
                <Input type="password" placeholder="senha" required />

                
                <button type="submit">Acessar</button>
            </Form>
        </Container>
    );
}

export default SignIn