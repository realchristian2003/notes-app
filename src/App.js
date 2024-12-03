import React, { useState } from 'react';
import './App.css';

function App() {
  const [notes, setNotes] = useState([
    { id: 1, title: "My note 1", content: "Note content 1" },
    { id: 2, title: "My note 2", content: "Note content 2" },
    { id: 3, title: "My note 3", content: "Note content 3" },
    { id: 4, title: "My note 4", content: "Note content 4" }
  ]);

  const [editingId, setEditingId] = useState(null);
  const [editingField, setEditingField] = useState(null);
  const [tempValue, setTempValue] = useState("");

  const addNote = () => {
    const newId = notes.length + 1;
    const newNote = {
      id: newId,
      title: `My note ${newId}`,
      content: `Note content ${newId}`
    };
    setNotes([...notes, newNote]);
  };

  const startEditing = (id, field, value) => {
    setEditingId(id);
    setEditingField(field);
    setTempValue(value);
  };

  const stopEditing = () => {
    if (editingId !== null && editingField) {
      setNotes((prevNotes) =>
        prevNotes.map((note) =>
          note.id === editingId ? { ...note, [editingField]: tempValue } : note
        )
      );
    }
    setEditingId(null);
    setEditingField(null);
    setTempValue("");
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
        {notes.map((note) => (
          <div key={note.id} className="note-preview">
            <div
              className="note-title"
              onDoubleClick={() => startEditing(note.id, "title", note.title)}
            >
              {editingId === note.id && editingField === "title" ? (
                <input
                  type="text"
                  value={tempValue}
                  onChange={(e) => setTempValue(e.target.value)}
                  onBlur={stopEditing}
                  autoFocus
                />
              ) : (
                note.title
              )}
            </div>
            <div
              className="note-content"
              onDoubleClick={() =>
                startEditing(note.id, "content", note.content)
              }
            >
              {editingId === note.id && editingField === "content" ? (
                <textarea
                  value={tempValue}
                  onChange={(e) => setTempValue(e.target.value)}
                  onBlur={stopEditing}
                  autoFocus
                />
              ) : (
                note.content
              )}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
