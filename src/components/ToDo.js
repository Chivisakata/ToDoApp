import React from "react"
import Button from '@atlaskit/button'
import CheckIcon from '@atlaskit/icon/glyph/check';
import styled, {css} from "styled-components";

const StyledButton = styled(Button)`
&&{
  margin-top: 2px;
  text-align: left;
  position: relative;
  width: 100%;
  word-wrap: break-word;
  white-space: normal;
  }
  &&{${(item) => item.isCompleted && css`
    text-decoration: line-through;
    `}
  }
  .check-icon {
    display: none;
    position: absolute;
    right: 8px;
    transform: translateY(-50%);
  }

  &:hover .check-icon {
    display: inline-block;
  }

  .check-icon:hover {
    background-color: #d5d1d1ff;
    border-radius: 3px;
  }
`;


export default function ToDo({todo, onCheckBtnClick}) {
  return (
    <>
      <StyledButton isCompleted={todo.isCompleted} iconAfter={ !todo.isCompleted && (
        <span onClick={() => onCheckBtnClick(todo.id)} className="check-icon">
          <CheckIcon primaryColor="#4fff4f" />
        </span>)} >{todo.name}
      </StyledButton>
    </>
  )
}
 