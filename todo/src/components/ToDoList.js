import React, { useReducer } from 'react';
import { initialState, todoReducer } from '../reducers/todoReducer';
import ToDoCard from './ToDoCard';

const ToDoList = () => {
  const [initialTodo, dispatch] = useReducer(todoReducer, initialState);
  // console.log('initialTodo state for ToDoList', initialTodo);
  
  return(
    <div>
      {initialTodo.map(task => {
        return <ToDoCard item={task.item} key={task.id} />
      })}
    </div>
  )
}

export default ToDoList;