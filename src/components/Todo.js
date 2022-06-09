import React from "react";
import styles from "../style.module.css";

const Todo = ({ todoItem, todoList, setTodoList }) => {
  const handleDelete = () => {
    setTodoList(todoList.filter(item => item.id !== todoItem.id));
  };

  return (
    <div className={styles.todoitem}>
      <h3 className={styles.todoname}>{todoItem}</h3>
      <button onClick={handleDelete} className={styles.deletebutton}>
        Done
      </button>
    </div>
  );
};

export default Todo;
