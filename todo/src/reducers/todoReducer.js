export const initialState = [
    {
      item: "Learn about reducers",
      completed: false,
      id: 3892987589,
    },
    {
      item: "Build a simple reducer and initial state",
      completed: true,
      id: 3892987588,
    },
    {
      item: "Set up state in your component",
      completed: true,
      id: 389298757,
    },
  ]

  export const toDoReducer = (state, action) => {
    // console.log(state, action);
    switch(action.type) {
      case 'CREATE_TASK':
        // console.log(state, action)
        console.log('CREATE_TASK in toDoReducer')
        return [
          ...state,
          { item: action.payload,
          completed: false,
          id: Date.now()}
        ]

      case 'TOGGLE_TASK':
        console.log('TOGGLE_TASK in toDoReducer');
        let idSelectorArray = state.map(task => {
          if(action.payload === task.id) {
            return {...task, completed: !task.completed}
          } else {
            return task;
          }
        })
        return idSelectorArray;

      case 'CLEAR_COMPLETED':
        console.log('CLEAR_COMPLETED IN toDoReducer');
        let filteredArray = state.filter(task => task.completed === false)
        return filteredArray;
      
      default: 
        return state;
    }
  }