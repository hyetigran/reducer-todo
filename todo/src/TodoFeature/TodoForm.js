import React from "react";

const TodoForm = props => {
  const handleSubmit = event => {
    event.preventDefault();
    const newTodo = {
      item: props.todoValue,
      id: Date.now(),
      completed: false
    };
    props.dispatch({ type: "ADD_TODO", payload: newTodo });
  };
  return (
    <div>
      <form onSubmit={event => handleSubmit(event)}>
        <h1>Todo Form</h1>
        <label>
          <input
            placeholder="add your next todo"
            type="text"
            value={props.todoValue}
            onChange={event =>
              props.dispatch({
                type: "INPUT_CHANGE",
                payload: event.target.value
              })
            }
          />
        </label>
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default TodoForm;
