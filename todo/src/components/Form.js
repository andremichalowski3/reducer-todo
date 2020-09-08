// import React, { useState, useReducer } from 'react';

// import { initialState, todoReducer } from '../reducers/todoReducer';

// const Form = () => {
//   const [initialTodo, dispatch] = useReducer(todoReducer, initialState);

//   const [newTask, setNewTask] = useState('')

//   const handleChanges = e => {
//     setNewTask(e.target.value);
//   }
//   console.log(newTask)

//   return(
//     <div>
//       <label htmlFor="text">New Task:</label>
//       <input 
//         type='text'
//         name='newTask'
//         value={newTask}
//         onChange={handleChanges}
//       />
//       <button 
//         onClick={() => {
//           dispatch({ type: 'CREATE_TASK', payload: newTask})
//         }}
//       >Submit</button>
//   </div>
//   )
// }

// export default Form;