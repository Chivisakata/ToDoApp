import Textfield from '@atlaskit/textfield';
import Button from '@atlaskit/button';
import ToDoList from './components/ToDoList.js';
import { useCallback, useState } from 'react';
import { v4 } from 'uuid';


function App() {
  //tao state cho text fielld va danh sach todo
  const [todoList, setTodoList] = useState([]);
  const [textInput, setTextInput] = useState('');
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
  return (
    <>
      <h3>Danh sách cần làm</h3>
      <Textfield
        name="add-todo" 
        placeholder="Việc cần làm..." 
        elemAfterInput={
          <Button isDisabled={!textInput} appearance='primary' style={{borderRadius: '8px', marginRight: '4px'}} onClick={onAddBtnClick} >
            Thêm   
          </Button>}
        style={{width: '500px'}}
        value={textInput}
        onChange={onTextInputChange}>
      </Textfield>
      <ToDoList todoList={todoList}/>
    </>
  );  
}

export default App; 
