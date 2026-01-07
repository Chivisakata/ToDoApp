import React from "react"
import Button from '@atlaskit/button'
import CheckIcon from '@atlaskit/icon/glyph/check';
import styled from "styled-components";

const StyledButton = styled(Button)`
  margin-top: 2px;
  text-align: left;

  &:hover {
    .check-icon {
      display: inline-block;
    }
}

  .check-icon {
  display: none;

  &:hover {
    background-color: #d5d1d1ff;
    border-radius: 3px;
  }
}
`;


export default function ToDo({todo, onCheckBtnClick}) {
  return (
    <>
      <StyledButton iconAfter={<span className="check-icon"><CheckIcon primaryColor="#4fff4f" onClick={() => onCheckBtnClick(todo.id)}/></span>} shouldFitContainer>{todo.name}</StyledButton>
    </>
  )
}
 