import React, { useState } from 'react';
import './App.css';

function NotePreviewComponent({ title, content }) {
  return (
    <div className="note-preview">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}

function App() {
  const [notes, setNotes] = useState([
    { id: 1, title: "My note 1", content: "Note content 1" },
    { id: 2, title: "My note 2", content: "Note content 2" },
    { id: 3, title: "My note 3", content: "Note content 3" },
    { id: 4, title: "My note 4", content: "Note content 4" }
  ]);

  const addNote = () => {
    const newId = notes.length + 1;
    const newNote = {
      id: newId,
      title: `My note ${newId}`,
      content: `Note content ${newId}`
    };
    setNotes([...notes, newNote]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-text">Notes</div>
        <button className="add-note-button" onClick={addNote}>
          ➕ Add note
        </button>
      </header>
      <main className="App-main">
        {}
        {notes.map(note => (
          <NotePreviewComponent
            key={note.id}
            title={note.title}
            content={note.content}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
