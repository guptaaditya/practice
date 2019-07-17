const booksState = {
  books: [],
  selected: [],
  editBook: null,
};
export default function book(state = booksState, action) {
  switch(action.type) {
    case 'GET_BOOKS_SUCCESS':
      return Object.assign({ ...state },  { books: action.books });
    case 'SELECT_BOOK':
      return Object.assign({ ...state },  { selected: [...state.selected, action.bookId] });
    case 'UNSELECT_BOOK':
      return Object.assign({ ...state },  { selected: state.selected.filter(bId => bId !== action.bookId) });
    case 'OPEN_EDIT_BOOK':
      return Object.assign({ ...state },  { editBook: { ...state.books.find(b => b.id === action.bookId) } });
    case 'CLOSE_EDIT_BOOK':
      return Object.assign({ ...state },  { editBook: null });
    default:
      return state;
  }
}
