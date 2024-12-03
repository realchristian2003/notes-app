import React, { useState, useEffect } from 'react';
import './App.css';
import { addDoc, getDocs, updateDoc, doc, notesCollectionRef } from './firebase';

function App() {
  const [notes, setNotes] = useState([]); 
  const [editingId, setEditingId] = useState(null);
  const [editingField, setEditingField] = useState(null);
  const [tempValue, setTempValue] = useState("");

  useEffect(() => {
    const fetchNotes = async () => {
      const querySnapshot = await getDocs(notesCollectionRef);
      const notesData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNotes(notesData);
    };
    fetchNotes();
  }, []);


  const addNote = async () => {
    const newNote = {
      title: `My note ${notes.length + 1}`,
      content: `Note content ${notes.length + 1}`,
    };

    const docRef = await addDoc(notesCollectionRef, newNote);
    setNotes([...notes, { ...newNote, id: docRef.id }]); 
  };


  const startEditing = (id, field, value) => {
    setEditingId(id);
    setEditingField(field);
    setTempValue(value);
  };


  const stopEditing = async () => {
    if (editingId !== null && editingField) {
      const noteDoc = doc(notesCollectionRef, editingId);
      await updateDoc(noteDoc, { [editingField]: tempValue }); 

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
