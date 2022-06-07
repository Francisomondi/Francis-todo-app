import React from "react";
import { useState } from "react";
import ListItem from "./ListItem";

const Todo = () => {
  const [todo, setTodo] = useState(" ");
  const [todoList, setTodoList] = useState([]);

  const handleChange = event => {
    setTodo(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    let tempList = todoList;
    tempList.push(todo);
    setTodoList(tempList);
    console.log(todoList);
    setTodo("");
  };

  return (
    <div>
      <h1>Francis Todo App</h1>
      <form onSubmit={handleSubmit}>
        <input value={todo} type="text" onChange={handleChange} />
        <button type="submit">Add</button>
      </form>
      {todoList.map(item => (
        <ListItem key={item} name={item} />
      ))}
    </div>
  );
};

export default Todo;
