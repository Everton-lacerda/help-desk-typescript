import styled from 'styled-components';

export const Container = styled.div`
    grid-area: HEADER;
    color:  ${props => props.theme.colors.secondary};
    background-color: ${props => props.theme.colors.white};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:0 10px; 
`;

export const Profile = styled.div``;
export const Welcome = styled.h3``;
export const UserName = styled.span``;