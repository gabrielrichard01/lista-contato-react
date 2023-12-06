import React, { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../store/hooks'
import { removeContact, updateContact } from '../../store'
import Contato, * as S from './styles'
import Cadastro from '../ContactForm/styles'

const ContactList: React.FC = () => {
  const contacts = useAppSelector((state) => state.contacts.contacts)
  const dispatch = useAppDispatch()
  const [editId, setEditId] = useState<number | null>(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const handleEdit = (contactId: number) => {
    const contact = contacts.find((c) => c.id === contactId)
    if (contact) {
      setEditId(contactId)
      setName(contact.name)
      setEmail(contact.email)
      setPhone(contact.phone)
    }
  }

  const handleSave = () => {
    if (editId) {
      dispatch(updateContact({ id: editId, name, email, phone }))
      setEditId(null)
      setName('')
      setEmail('')
      setPhone('')
    }
  }

  const handleCancel = () => {
    setEditId(null)
    setName('')
    setEmail('')
    setPhone('')
  }

  return (
    <div>
      {contacts.map((contact) => (
        <Contato key={contact.id}>
          {editId === contact.id ? (
            <div>
              <Cadastro
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Cadastro
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Cadastro
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <S.BtnSalvar onClick={handleSave}>Salvar</S.BtnSalvar>
              <S.BtnRemoverECancelar onClick={handleCancel}>
                Cancelar
              </S.BtnRemoverECancelar>
            </div>
          ) : (
            <>
              <S.Info>
                <b>Nome:</b>
                {contact.name}
              </S.Info>
              <S.Info>
                <b>Email:</b>
                {contact.email}
              </S.Info>
              <S.Info>
                <b>Telefone:</b>
                {contact.phone}
              </S.Info>
              <S.BtnEditar onClick={() => handleEdit(contact.id)}>
                Editar
              </S.BtnEditar>
              <S.BtnRemoverECancelar
                onClick={() => dispatch(removeContact(contact.id))}
              >
                Remover
              </S.BtnRemoverECancelar>
            </>
          )}
        </Contato>
      ))}
    </div>
  )
}

export default ContactList
