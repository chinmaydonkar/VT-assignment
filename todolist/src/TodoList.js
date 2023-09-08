import React, { useState } from "react";

const TodoList = () => {
  // Initialize the state to hold the tasks and the input text.
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");

  // Function to add a new task.
  const addTask = () => {
    if (taskText.trim() === "") return; // Don't add empty tasks.

    // Create a new array of tasks with the current tasks plus the new task.
    setTasks([...tasks, taskText]);

    // Clear the input field.
    setTaskText("");
  };

  // Function to remove a task by its index.
  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          placeholder="Add a task..."
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <div>
        {tasks.length === 0 ? (
          <p>No tasks added yet!</p>
        ) : (
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>
                {task}
                <button onClick={() => removeTask(index)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TodoList;
