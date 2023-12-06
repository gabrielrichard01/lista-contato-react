import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

const Contato = styled.div`
  margin: 20px 0;
  padding: 10px;
  border: 2px solid black;
  border-radius: 8px;
`

export const Info = styled.span`
  display: block;
  margin-bottom: 5px;
`

export const BtnEditar = styled.button`
  background-color: ${variaveis.cinza};
  padding: 8px;
  margin-right: 10px;
  border: none;
  border-radius: 10px;
  color: ${variaveis.branco};
  font-weight: bold;
  cursor: pointer;
`

export const BtnRemoverECancelar = styled.button`
  background-color: ${variaveis.vermelho};
  padding: 8px;
  margin-right: 10px;
  border: none;
  border-radius: 10px;
  color: ${variaveis.branco};
  font-weight: bold;
  cursor: pointer;
`

export const BtnSalvar = styled.button`
  background-color: ${variaveis.verde};
  padding: 8px;
  margin-right: 10px;
  border: none;
  border-radius: 10px;
  color: ${variaveis.branco};
  font-weight: bold;
  cursor: pointer;
`

export default Contato
