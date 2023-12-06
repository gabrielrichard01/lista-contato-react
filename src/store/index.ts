import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Contact {
  id: number
  name: string
  email: string
  phone: string
}

interface ContactsState {
  contacts: Contact[]
}

const initialState: ContactsState = {
  contacts: [
    {
      id: 1,
      name: 'Gabriel Richard',
      email: 'gabriel_richard@gmail.com',
      phone: '(11)95711-0742'
    },
    {
      id: 2,
      name: 'João Ribeiro',
      email: 'joao.ribeiro@yahoo.com',
      phone: '(11)95698-8793'
    },
    {
      id: 3,
      name: 'Maria da Conceição',
      email: 'maria_conceicao2023@outlook.com',
      phone: '(11)96254-8216'
    }
  ]
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.contacts.push(action.payload)
    },
    removeContact: (state, action: PayloadAction<number>) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      )
    },
    updateContact: (state, action: PayloadAction<Contact>) => {
      const index = state.contacts.findIndex(
        (contact) => contact.id === action.payload.id
      )
      if (index !== -1) {
        state.contacts[index] = action.payload
      }
    }
  }
})

export const { addContact, removeContact, updateContact } =
  contactsSlice.actions

const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
