import React, { useState } from 'react'
import { useAppDispatch } from '../../store/hooks'
import { addContact } from '../../store'
import Cadastro, { BtnAdicionar } from './styles'

const ContactForm: React.FC = () => {
  const dispatch = useAppDispatch()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(addContact({ id: Date.now(), name, email, phone }))
    setName('')
    setEmail('')
    setPhone('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Cadastro
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nome"
      />
      <Cadastro
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <Cadastro
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Telefone"
      />
      <BtnAdicionar type="submit">Adicionar</BtnAdicionar>
    </form>
  )
}

export default ContactForm
