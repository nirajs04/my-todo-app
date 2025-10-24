// src/App.js
import './App.css';

// This is the main App component
function App() {
  // We will add the list of todos here later
  const todos = [
    { text: 'Learn React', isCompleted: false },
    { text: 'Build portfolio project', isCompleted: false },
    { text: 'Apply for job', isCompleted: false },
  ];

  return (
    <div className="app">
      <div className="todo-list">
        <h1>My To-Do List</h1>
        {/* We will map over the todos here later */}
      </div>
    </div>
  );
}

export default App;