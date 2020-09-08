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

  export const todoReducer = (state, action) => {
    console.log(state, action);
    switch(action.type) {
      
      default: 
        return state;
    }
  }