import React from "react";
import Todo from "./Todo";

const TodoList = ({ todoList, setTodoList }) => {
  return (
    <div>
      {todoList.map(todoItem => (
        <Todo
          setTodoList={setTodoList}
          todoItem={todoItem}
          todoList={todoList}
        />
      ))}
    </div>
  );
};

export default TodoList;
