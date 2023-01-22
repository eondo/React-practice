import { atom } from 'react'

export const todosState = atom({
  key: 'todos',
  default: [],
})