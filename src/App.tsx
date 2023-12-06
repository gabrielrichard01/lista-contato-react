import React from 'react'
import ContactList from './components/ContactList'
import EstiloGlobal, { Container } from './styles'
import Header from './components/Header'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Header />
      <Container>
        <ContactList />
      </Container>
    </>
  )
}

export default App
