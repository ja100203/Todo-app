import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare} from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'



const TodoList = ({ todos, setTodos ,setEditTodo}) => {
const handleComplete=(todo)=>{
    setTodos(
        todos.map((item)=>{
            if(item.id===todo.id){
                return{...item,completed:!item.completed}
            }
            return item;
        })
    )
}
    const handleEdit = ({id})=>{
        const findTodo=todos.find((todo)=>todo.id===id);
        setEditTodo(findTodo);
    }

    const handleDelete =({id})=>{
        setTodos(todos.filter((todo)=>todo.id !== id));
    }
    return (
        <div>
            {
                todos.map((todo) => (
                    <li className='todo-list' key={todo.id}>
                        <input
                           type="text"
                            value={todo.title}
                            className={`list ${todo.completed ? "complete":""}`}
                            onChange={(event) => event.preventDefault()}
                        />
                        <button className='button-complete task-button'
                         onClick={()=>handleComplete(todo)}>
                        <FontAwesomeIcon icon={faCircleCheck} style={{color: "#d32612",} } />
                        </button>
                        <button className='button-edit task-button'
                        onClick={()=>handleEdit(todo)}
                        >
                        <FontAwesomeIcon icon={faPenToSquare} style={{color: "#aef033",}} />
                        </button>
                        <button className='button-delete task-button'
                         onClick={()=>handleDelete(todo)}>
                        <FontAwesomeIcon icon={faTrashCan} style={{color: "#0ee1d3",}} />
                        </button>
                    </li>
                ))
            }
        </div>
    )
}

export default TodoList;
