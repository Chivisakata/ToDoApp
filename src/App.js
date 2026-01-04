import Textfield from '@atlaskit/textfield';
import Button from '@atlaskit/button';
import ToDoList from './components/ToDoList.js';



function App() {
  return (
    <>
      <h3>Danh sách cần làm</h3>
      <Textfield
        name="add-todo" 
        placeholder="Việc cần làm..." 
        elemAfterInput={
          <Button appearance='primary' style={{borderRadius: '8px', marginRight: '4px'}}> 
            Thêm   
          </Button>}
        style={{width: '500px'}}>
      </Textfield>
      <ToDoList />
    </>
  );  
}

export default App; 
