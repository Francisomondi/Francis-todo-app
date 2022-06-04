import React from "react";
import { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const handleChange = event => {
    setTodo(event.target.value);
  };
  return (
    <div>
      <h1>Francis Todo App</h1>
      <form>
        <input value={todo} type="text" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Todo;
