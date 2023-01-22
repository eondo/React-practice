import React from 'react'
// import styled from 'styled-components'
import TodoItem from './TodoItem'
import { useRecoilValue } from 'react'
import { todosState } from '../recoil/todos'


const TodoList = () => {
  const todos = useRecoilValue(todosState)

  return (
    <Container>
      <ListContainer>
        {todos.map(todo => (
          <TodoItem key={todo.id} data={todo} />
        ))}
      </ListContainer>
    </Container>
  )
}

export default TodoList