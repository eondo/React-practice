import logo from './logo.svg';
import './App.css';
import React from 'react'
// import styled from 'styled-components'

import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'


function App() {
  return (
    <Container>
      <Title>Recoil TodoList</Title>
      <TodoInput />
      <TodoList />
    </Container>
  );
}

// const Container = styled.div`
//   background: #fff;
//   margin: 130px 0 40px 0;
//   position: relative;
//   box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
// `;

// const Title = styled.h1`
//   position: absolute;
//   top: -125px;
//   width: 100%;
//   font-size: 60px;
//   text-align: center;
//   color: purple;
//   font-weight: bold;
//   font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
// `;

export default App;
