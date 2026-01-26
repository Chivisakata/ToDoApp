import React from "react"
import styled from "styled-components"
import ToDo from "./ToDo"

const StyledToDoListContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  box-sizing: border-box;
`;

export default function ToDoList({todoList, onCheckBtnClick}) {
  return (
    <StyledToDoListContainer>
      {todoList.map(todo => <ToDo key={todo.id} todo={todo} onCheckBtnClick={onCheckBtnClick}/>)}
    </StyledToDoListContainer>
  )
}
