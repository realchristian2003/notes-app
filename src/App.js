import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import TodoList from './TodoList';

function App() {
  
  const [notes, setNotes] = useState([
    { id: 1, title: "My note 1", content: "Note content 1" },
    { id: 2, title: "My note 2", content: "Note content 2" },
    { id: 3, title: "My note 3", content: "Note content 3" },
    { id: 4, title: "My note 4", content: "Note content 4" }
  ]);

  // Function to add a new note
  const addNote = () => {
    const newNote = {
      id: notes.length + 1,  
      title: `My note ${notes.length + 1}`,
      content: `Note content ${notes.length + 1}`
    };
    setNotes([...notes, newNote]);  
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/todolist" element={<TodoList notes={notes} addNote={addNote} />} />
      </Routes>
    </div>
  );
}

export default App;
