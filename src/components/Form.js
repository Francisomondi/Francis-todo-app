import styles from "../style.module.css";
import React from "react";

const Form = () => {
  return (
    <div className={styles.todoform}>
      <form>
        <input
          className={styles.todoinput}
          type="text"
          placeholder="Add Todo Item"
        />
        <button className={styles.todobutton}>Add</button>
      </form>
    </div>
  );
};

export default Form;
