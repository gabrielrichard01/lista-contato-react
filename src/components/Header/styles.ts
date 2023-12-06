import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

const HeaderContent = styled.header`
  background-color: ${variaveis.amarelo};
  padding-bottom: 10px;
`

export const HeaderContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`

export const HeaderTitle = styled.h1`
  font-size: 40px;
  text-align: center;
  font-family: Sans-serif;
  padding: 20px 0;
`

export default HeaderContent
