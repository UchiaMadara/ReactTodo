import React, { useState } from "react";

export default function Todo() {
  const [task, setTask] = useState(["bath", "teeth", "run"]);
  const [newTask, setNewTask] = useState("");

  //stores the value of the text added into the input
  function handleInput(event) {
    setNewTask(event.target.value);
  }

  // adds new task and does not allow empty tasks
  function addTask() {
    setTask((t) => [...t, newTask]);
    setNewTask("");
  }

  function deleteTask(index) {
    const updatedList = task.filter((element, i) => i !== index);
    setTask(updatedList);
  }

  return (
    <div className="to-do-list">
      <h1>To-Do-List</h1>
      <div>
        <input
          type="text"
          placeholder=" Add task"
          value={newTask}
          onChange={handleInput}
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>
      <ol>
        {task.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button
              className="delete-button>"
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
