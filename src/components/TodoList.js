import React from "react";
import Todo from "./Todo";

const TodoList = ({ todoList }) => {
  return (
    <div>
      {todoList.map(todoItem => (
        <Todo todoItem={todoItem} />
      ))}
    </div>
  );
};

export default TodoList;
