import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

const Cadastro = styled.input`
  padding: 8px;
  display: block;
  margin: 10px auto;
  width: 60%;
`

export const BtnAdicionar = styled.button`
  margin: 0 auto;
  display: flex;
  border: none;
  border-radius: 5px;
  padding: 8px;
  background-color: ${variaveis.verde};
  font-weight: bold;
  cursor: pointer;
`

export default Cadastro
