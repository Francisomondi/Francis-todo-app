import styles from "../style.module.css";
import React from "react";
import Todo from "./Todo";

const Form = ({ todo, setTodo, todoList, setTodoList }) => {
  const handleChange = event => {
    setTodo(event.target.value);
    console.log(todo);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setTodoList([...todoList, todo]);
    setTodo("");
    console.log(todoList);
  };
  return (
    <div className={styles.todoform}>
      <form onSubmit={handleSubmit}>
        <input
          value={todo}
          onChange={handleChange}
          className={styles.todoinput}
          type="text"
          placeholder="Add Todo Item"
        />
        <button className={styles.todobutton} type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
