import React, { useState } from 'react';
//import './App.css';
import Todo from './Todo';
import TodoForm from './TodoForm';

function App() {
  const [todos, setTodos] = useState([
    { text: "JPA" ,isLearned:false},
    { text: "JSF",isLearned:false },
    { text: "Servlet" ,isLearned:false}
  ])

  const addTodo = text => {
    const newTodos = [...todos,{text}]
    setTodos(newTodos)
  }
  const learned = index =>{
    const newTodos = [...todos]
    newTodos[index].isLearned = true;
    setTodos(newTodos)
  }
  return (
    <div className="container">
      <h2><span className="badge badge-dark">Requirements Java Developer</span></h2>
      {
        todos.map((todo, index) => (
          <Todo
            key={index}  
            index={index}         
            todo={todo}
            learned={learned}
          />
        ))
      }
      <TodoForm addTodo={addTodo}/>
    </div>
  );
}

export default App;
