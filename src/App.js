import React, { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  // Add or Update Task
  const handleAddOrUpdate = () => {
    if (task.trim() === "") return;

    if (editIndex !== null) {
      // Update task
      const updatedTasks = tasks.map((t, index) =>
        index === editIndex ? task : t
      );
      setTasks(updatedTasks);
      setEditIndex(null);
    } else {
      // Add task
      setTasks([...tasks, task]);
    }

    setTask("");
  };

  // Edit Task
  const handleEdit = (index) => {
    setTask(tasks[index]);
    setEditIndex(index);
  };

  // Delete Task
  const handleDelete = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="container">
      <h1>📝 To-Do List</h1>

      <div className="input-box">
        <input
          type="text"
          placeholder="Enter task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={handleAddOrUpdate}>
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </div>

      <ul>
        {tasks.map((item, index) => (
          <li key={index}>
            <span>{item}</span>
            <div>
              <button onClick={() => handleEdit(index)}>✏️</button>
              <button onClick={() => handleDelete(index)}>❌</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
