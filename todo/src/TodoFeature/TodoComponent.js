import React, { useReducer } from "react";

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

import { reducer } from "../reducers/reducer";
import { initialState } from "../reducers/initialState";

const TodoComponent = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  return (
    <div>
      <TodoForm todoValue={state.todoValue} dispatch={dispatch} />
      <TodoList todoList={state.todoList} />
    </div>
  );
};

export default TodoComponent;
