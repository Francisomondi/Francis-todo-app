import React from "react";
import styles from "../style.module.css";

const Todo = ({ todoItem }) => {
  return (
    <div className={styles.todoitem}>
      <h3 className={styles.todoname}>{todoItem}</h3>
      <button className={styles.deletebutton}>Done</button>
    </div>
  );
};

export default Todo;
