import Textfield from '@atlaskit/textfield';
import Button from '@atlaskit/button';
import ToDoList from './components/ToDoList.js';
import { useCallback, useEffect, useState } from 'react';
import { v4 } from 'uuid';
import styled from 'styled-components';

const TODO_APP_STORAGE_KEY = 'TODO_APP';

const AppContainer = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
`;

function App() {
  //tao state cho text fielld va danh sach todo
  //khoi tao state tu local storage neu co
  const [todoList, setTodoList] = useState(() => {
    const storagedTodoList = localStorage.getItem(TODO_APP_STORAGE_KEY);
    if(storagedTodoList) {
      return JSON.parse(storagedTodoList);
    }
    return [];
  });
  //state cho text input
  const [textInput, setTextInput] = useState('');
  //luu danh sach todo vao local storage khi co su thay doi
  useEffect(() => {
    localStorage.setItem(TODO_APP_STORAGE_KEY, JSON.stringify(todoList));
  }, [todoList]);
  //su kien thay doi text input
  const onTextInputChange = useCallback((e) => {
    setTextInput(e.target.value);
  }, []);
  //su kien click button them
  const onAddBtnClick = useCallback((e) => {
    //loai bo truong hop khong co text input
    if(textInput.trim() === '') return;
    //them text input vao danh sach todo
    setTodoList([{id: v4(), name: textInput, isCompleted: false},...todoList]);
    //xoa text input
    setTextInput('');
  }, [textInput, todoList]);
  //su kien click button check
  const onCheckBtnClick = useCallback((id) => {
    setTodoList(prevState => prevState.map(todo => todo.id === id ? {...todo, isCompleted: true } : todo));
  }, []);
  return (
    <AppContainer>
      <h3>Danh sách cần làm</h3>
      <Textfield
        name="add-todo" 
        placeholder="Việc cần làm..." 
        elemAfterInput={
          <Button isDisabled={!textInput} appearance='primary' style={{borderRadius: '8px', marginRight: '4px'}} onClick={onAddBtnClick} >
            Thêm   
          </Button>}
        style={{width: '100%', boxSizing: 'border-box'}}
        value={textInput}
        onChange={onTextInputChange}>
      </Textfield>
      <ToDoList todoList={todoList} onCheckBtnClick={onCheckBtnClick} />
    </AppContainer>
  );  
}

export default App; 
