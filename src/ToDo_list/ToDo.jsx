import React,{useState,useEffect} from 'react'
import Todo_header from './Todo_header';
import Form from './Form';
import TodoList from './TodoList';
import './ToDo.css';

const ToDo = () => {
  const initialState= JSON.parse(localStorage.getItem("todos")) || [];
  const [input,setInput]=useState("");
  const [todos,setTodos]=useState(initialState);
  const [editTodo,setEditTodo]=useState(null);

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos]);
  return (
    <div className='containerr'>
      <div className='app-wrapper'>
        <div>
          <Todo_header />
        </div>
        <div>
          <Form 
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
          />
        </div>
        <div>
        <TodoList
        todos={todos}
        setTodos={setTodos}
        setEditTodo={setEditTodo}
        />
        </div>
      </div>
    </div>
  )
}

export default ToDo;
