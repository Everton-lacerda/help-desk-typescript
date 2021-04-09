import React, {useState} from 'react';
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
import { useAuth } from '../../hooks/auth';

const SignIn: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const { signIn } = useAuth();
    return (
        <Container>
            <Logo> 
                {/* <img src={imgLogo} alt="Help Desk"/> */}
                {/* <h2>Help Desk</h2> */}
            </Logo>

            <Form onSubmit={() => signIn(email, password)}>
                <FormTitle>Entrar</FormTitle>
                <Input 
                    type="email" 
                    placeholder="e-mail"  
                    required  
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input 
                    type="password" 
                    placeholder="senha" 
                    required 
                    onChange={(e) => setPassword(e.target.value)}    
                />

                
                <Button type="submit">Acessar</Button>
        
                <LinkButton>
                    <Link to="/register">Criar conta</Link>
                </LinkButton>

            </Form>
            
        </Container>
    );
}

export default SignIn