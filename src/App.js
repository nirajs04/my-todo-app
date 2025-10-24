// src/App.js
import React, { useState } from 'react';

// This is a separate component for a single todo item
function TodoItem({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
    >
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  );
}
// This is the main App component
function App() {
  const [todos, setTodos] = useState([ // <-- ADDED THIS
    { text: 'Learn React', isCompleted: false },
    { text: 'Build portfolio project', isCompleted: false },
    { text: 'Apply for job', isCompleted: false },
  ]);

  return (
    <div className="app">
      <div className="todo-list">
        <h1>My To-Do List</h1>
        {todos.map((todo, index) => ( // <-- This line will now work
          <TodoItem
            key={index}
            index={index}
            todo={todo}
            completeTodo={() => {}} /* Placeholder function */
            removeTodo={() => {}}   /* Placeholder function */
          />
        ))}
      </div>
    </div>
  );
}

export default App;
