import { Container } from '../../styles'
import ContactForm from '../ContactForm'
import HeaderContent, { HeaderTitle } from './styles'

const Header = () => {
  return (
    <HeaderContent>
      <Container>
        <HeaderTitle>Lista de Contato</HeaderTitle>
        <ContactForm />
      </Container>
    </HeaderContent>
  )
}

export default Header
