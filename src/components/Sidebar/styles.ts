import styled from 'styled-components';

export const Container = styled.div`  
    grid-area: SIDEBAR;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.secondary};
    padding-left: 20px;

    border-right: 1px solid ${props => props.theme.colors.gray};
`;