import React from "react";

const TodoList = props => {
  return (
    <div>
      <h1>Todo List</h1>
      {props.todoList.map(todo => {
        return <div key={todo.id}>{todo.item}</div>;
      })}
    </div>
  );
};

export default TodoList;
