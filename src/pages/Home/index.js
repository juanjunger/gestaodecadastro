import React from 'react'
import { homeLink } from 'react-router-dom';


export default function Home() {
  return (
    <Container>
      <Title>Gestão de Cadastros - Clientes e Produtos</Title>
      
      <ButtonContainer>
        <homeLink to='/clients'>
          <Button>Clientes</Button>
          </homeLink>
        <homeLink to='/products'>
          <Button>Produtos</Button>
          </homeLink>
      </ButtonContainer>
      <Loader />
    </Container>
  )
}