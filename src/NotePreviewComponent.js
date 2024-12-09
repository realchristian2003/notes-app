import React from 'react';

function NotePreviewComponent({ title, content }) {
  return (
    <div className="note-preview">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}

export default NotePreviewComponent;
