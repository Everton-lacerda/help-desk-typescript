import styled from 'styled-components';

export const Container = styled.div` 
    height: 100vh;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: ${props => props.theme.colors.primary};
`;
export const Logo = styled.div` 
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    h2 {
        color: ${props => props.theme.colors.white};
        margin-left: 7px;
        margin-top: 8px;
    }
    img {
        width: 80px;
        height: 30px;
    }
`;
export const Form = styled.form` 
    width: 350px;
    height: 400px;

    padding: 30px;

    border-radius: 10px;

    background-color: ${props => props.theme.colors.tertiary};

    a {
        margin: 3.5em 0;
        text-align: center;
    }

`;
export const LinkButton = styled.div` 
    width: 100%; 
    text-align: center;

    margin-top: 20px;

`;
export const FormTitle = styled.h1` 
    margin-bottom: 40px;
    color: ${props => props.theme.colors.white};
`;