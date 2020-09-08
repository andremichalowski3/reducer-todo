import React, { useReducer, useState } from 'react';
import { initialState, toDoReducer } from '../reducers/todoReducer';

import ToDoCard from './ToDoCard';
// import Form from './../components/Form';

const ToDoList = () => {
  const [initialToDo, dispatch] = useReducer(toDoReducer, initialState);
  const [newTask, setNewTask] = useState('')

  // const handleChanges = e => {
  //   setNewTask(e.target.value);
  // }
  // // console.log(newTask)

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'CREATE_TASK', payload: newTask})
    setNewTask('');
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="text">New Task:</label>
        <input 
          type='text'
          name='newTask'
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button 
          type="submit"
        >Submit</button>
        <button 
          onClick={() => {
            dispatch({ type: 'CLEAR_COMPLETED'})
          }}
        >Clear Completed</button>
      </form>
      <div>
        {initialToDo.map(task => {
          return <ToDoCard 
            key={task.id}
            id={task.id}
            item={task.item}
            completed={task.completed}
            dispatch={dispatch} 
            />
        })}
      </div>
    </div>
  )
}

export default ToDoList;