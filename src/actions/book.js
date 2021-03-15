export function searchBook(term) {
  return { type: 'FILTER_BOOK', term };
}

export function getBooks() {
  return { type: 'GET_BOOKS' };
}

export function openAddNewBook() {
  return { type: 'OPEN_ADD_NEW_BOOK' };
}

export function openEditBook(bookId) {
  return { type: 'OPEN_EDIT_BOOK', bookId };
}

export function onDeleteBook(selectedBooks) {
  return { type: 'DELETE_BOOKS', selectedBooks };
}

export function onAddBookClose() {
  return { type: 'CLOSE_ADD_NEW_BOOK' };
}

export function onEditBookClose() {
  return { type: 'CLOSE_EDIT_BOOK' };
}

export function onAddBookSave(book) {
  return { type: 'SAVE_BOOK', book };
}

export function onEditBookSave(book) {
  return { type: 'UPDATE_BOOK', book };
}

export function onSelectBook(bookId) {
  return { type: 'SELECT_BOOK', bookId };
}

export function onUnselectBook(bookId) {
  return { type: 'UNSELECT_BOOK', bookId };
}