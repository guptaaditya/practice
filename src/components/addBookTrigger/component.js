import React from 'react'

export default function AddBookTrigger({ openAddNewBook }) {
  return <button type="button" className="btn btn-primary" onClick={openAddNewBook}>Add new book</button>;
}