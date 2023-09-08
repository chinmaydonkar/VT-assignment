import React, { useState } from "react";
import styled from "styled-components";

const TodoListContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  
`;

const TaskInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const TaskInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid ;
  border-radius: 5px;
  width: 70%;
  margin-right: 10px;
`;

const AddButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: darkblue;
  }
`;

const TaskList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const TaskItem = styled.li`
  border: 1px solid ;
  border-radius: 5px;
  margin: 10px 0;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RemoveButton = styled.button`
  background-color: red;
  padding : 5px;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: crimson;
  }
`;

const NoTasksMessage = styled.p`
  color: darkgrey;
`;

const TodoList = () => {
  // Initialize the state to hold the input .
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");

  // Function to add a new task.
  const addTask = () => {
    if (taskText.trim() === "") return; // Don't add empty tasks.

    // Create a new array of tasks with the current tasks and the new task.
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
    <TodoListContainer>
      <Title>Todo List</Title>
      <TaskInputContainer>
        <TaskInput
          type="text"
          placeholder="Add a task..."
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <AddButton onClick={addTask}>Add</AddButton>
      </TaskInputContainer>
      <TaskList>
        {tasks.length === 0 ? (
          <NoTasksMessage>No tasks added yet!</NoTasksMessage>
        ) : (
          tasks.map((task, index) => (
            <TaskItem key={index}>
              {task}
              <RemoveButton onClick={() => removeTask(index)}>
                Remove
              </RemoveButton>
            </TaskItem>
          ))
        )}
      </TaskList>
    </TodoListContainer>
  );
};

export default TodoList;
