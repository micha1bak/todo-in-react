import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { TodoInput } from "./components/TodoInput"
import { TodoList } from "./components/TodoList"
import { useState} from 'react'

function App() {

  const [todos, setTodos] = useState([{ input: 'Hello! Add your first todo!', complete: true }]);
  const [selectedTab, setSelectedTab] = useState('Open');

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, {input: newTodo, complete: false}];
    setTodos(newTodoList);
  }

  function handleCompleteTodo(index) {
    let newTodoList = [...todos];
    let completedTodo = todos[index];
    completedTodo.complete = true;
    newTodoList[index] = completedTodo;
    setTodos(newTodoList);
  }

  function handleDeleteTodo(index) {
    let newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== index;
    });
    setTodos(newTodoList);
     
  }
  
  return (
    <>
      <Header todos={todos}/>
      <Tabs 
        selectedTab={selectedTab} 
        setSelectedTab={setSelectedTab} 
        todos={todos}
      />
      <TodoList 
        handleDeleteTodo={handleDeleteTodo} 
        handleCompleteTodo={handleCompleteTodo}
        selectedTab={selectedTab} 
        todos={todos}
      />
      <TodoInput handleAddTodo={handleAddTodo}/>
    </>
  )
}

export default App;
