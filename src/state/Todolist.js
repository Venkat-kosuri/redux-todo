import React,{useState} from "react";
import { useSelector, useDispatch } from "react-redux";

const ToDoItem = ({ todo, index }) => {
  const dispatch = useDispatch();

  const deleteTodo = () => {
    dispatch({ type: "REMOVE_TODO", payload: index });
  };

  return (
    <li className="todo-item">
      <span>{todo}</span>
      <button onClick={deleteTodo} style ={{marginLeft:'30px'}}>remove</button>
    </li>
  );
}

export default function ToDoList() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const [inputValue, changeValue] =useState("");
  const addTodo = () => {
    dispatch({ type: "ADD_TODO", payload: inputValue });
    changeValue("");
  };
  return (
    <div>
      <input value={inputValue} onChange={e => changeValue(e.target.value)} style ={{marginRight:'30px',marginLeft:'20px'}} />
      <button onClick={addTodo}>Add to Todolist</button>

      <ul>
        {todos.map((todo, idx) => (
          <ToDoItem key={idx} todo={todo} index={idx} />
        ))}
      </ul>
    </div>
  );
}
