import React, { useState } from 'react';
import './TodoList.css'; 

function TodoList() {
  const [notes, setNotes] = useState([
    { id: 1, title: 'My note 1', content: 'Note content 1', isEditing: false },
    { id: 2, title: 'My note 2', content: 'Note content 2', isEditing: false },
    { id: 3, title: 'My note 3', content: 'Note content 3', isEditing: false },
    { id: 4, title: 'My note 4', content: 'Note content 4', isEditing: false },
  ]);

  const addNote = () => {
    const newNote = {
      id: notes.length + 1,
      title: `My note ${notes.length + 1}`,
      content: `Note content ${notes.length + 1}`,
      isEditing: false,
    };
    setNotes([...notes, newNote]);
  };


  const handleEdit = (id) => {
    setNotes(notes.map(note => 
      note.id === id ? { ...note, isEditing: !note.isEditing } : note
    ));
  };


  const handleChange = (e, id) => {
    const updatedContent = e.target.value;
    setNotes(notes.map(note => 
      note.id === id ? { ...note, content: updatedContent } : note
    ));
  };

  return (
    <div className="todo-container">
      <button className="add-note-button" onClick={addNote}>Add Note</button>
      <div className="notes-container">
        {notes.map((note) => (
          <div
            className="note-preview"
            key={note.id}
            onClick={() => handleEdit(note.id)} 
          >
            <h3>{note.title}</h3> {}
            {note.isEditing ? (
              <textarea
                value={note.content}
                onChange={(e) => handleChange(e, note.id)}
                onBlur={() => handleEdit(note.id)} 
                autoFocus
                className="note-edit-textarea" 
              />
            ) : (
              <p>{note.content}</p> 
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
