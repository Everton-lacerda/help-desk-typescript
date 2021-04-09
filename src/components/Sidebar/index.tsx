import React from 'react';

import { Container, Header, LogoImg, MenuContainer, MenuItemLink, MenuItemLinkBotton,Title } from './styles';


import { 
    MdDashboard, 
    MdRecordVoiceOver,
    MdExitToApp,
    MdPeople,
    MdSettings
     
 } from 'react-icons/md';
 

import logoimg from '../../assets/desk-logo.png';
const Sidebar: React.FC = () => {
    return(
        <Container>
            <Header>
                <LogoImg src={logoimg} alt="logo minha wallet" />
                <Title>Help Desk</Title>
            </Header>

            <MenuContainer>
                <MenuItemLink href="/called " >
                    <MdRecordVoiceOver />
                    Chamados
                </MenuItemLink>
                <MenuItemLink href="/clients" >
                    <MdPeople />
                    Clientes
                </MenuItemLink>
                <MenuItemLink href="/settings" >
                    <MdSettings />
                    Configurações
                </MenuItemLink>
                <MenuItemLinkBotton href="#" >
                    <MdExitToApp />
                    Sair
                </MenuItemLinkBotton>
            </MenuContainer>

        </Container>
    )
}

export default Sidebar;