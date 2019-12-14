export function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
        todoValue: ""
      };
    case "INPUT_CHANGE":
      console.log(state);
      return { ...state, todoValue: action.payload };
    default:
      return state;
  }
}
