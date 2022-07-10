import React from 'react'
import  logoimg from '../../assets/logo.svg'
import { Container, Content } from './style'

interface HeaderProps{
  onOpenNewTrasactionNewModal: () => void;
}

export function Header({onOpenNewTrasactionNewModal}: HeaderProps ){

    return(
        <Container>
            <Content>
            <img src={logoimg} alt="dtmoney" />
            <button type="button" onClick={onOpenNewTrasactionNewModal} >Nova transação</button>
               </Content>  
            </Container>
    )
}