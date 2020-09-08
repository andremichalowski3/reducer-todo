import React from 'react';

const ToDoCard = props => {
  // let done = (props) => { 
  //   if (props.completed) {
  //     return ""
  //   } else {
  //     return "^^^^^^^^^^^^^^^^"
  //   }
  // }
  // if (completed) return 'you did it'
  // else if (not completed) return 'GO DO IT'

  // let done = props.completed.toString()
  // let notDone = (!props.completed).toString()
  console.log('TOGGLE in ToDoCard');
  
  return (
    <div onClick={() => props.dispatch({ type: 'TOGGLE_TASK', payload: props.id })}>
      <h3>{props.item}</h3>
      <p>{props.completed ? '' : '^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^'} </p>
    </div>
  )
}

export default ToDoCard;