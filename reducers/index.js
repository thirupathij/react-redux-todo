let initialState = {
  todos: [],
  filter: 'All'
}

function addTodo(state = initialState, action) {
  if (action.type === 'ADD_TODO') {
    return Object.assign({}, state, {
      todos: [
          ...state.todos,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ]
    });
  }
  else if (action.type === 'TOGGLE_TODO') {
    return Object.assign({}, state, {
      todos: state.todos.map((eachTodo) => {
          if (action.id == eachTodo.id) {
            return Object.assign({}, eachTodo, {
              completed: !eachTodo.completed
            });
          }
          return eachTodo;
        })
    });
  }
  else if (action.type === 'FILTER_TODO') {
    return Object.assign({}, state, {
      filter: action.filter
    });
  }
  return state;
}

export default addTodo;