import React from "react"
import Button from '@atlaskit/button'


export default function ToDo({todo}) {
  return (
    <>
      <Button shouldFitContainer style={{marginTop:'2px', textAlign:'left'}}>{todo.name}</Button>
    </>
  )
}
