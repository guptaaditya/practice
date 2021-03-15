import React from 'react'

export default function EditBookTrigger(props) {
  return (
    <button type="button" className="btn btn-primary ml-10" onClick={e => props.openEditBook(props.selectedBook)}>Edit book</button>
  );
}
