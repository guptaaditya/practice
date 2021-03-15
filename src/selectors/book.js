import { createSelector } from 'reselect'

export const booksListSelector = ({ books: { books } = {} }) => books;

export const openNewBookForm = ({ ui: { newBook } = {} }) => newBook;

export const editBook = ({ books: { editBook } = {} }) => editBook;

export const selectedBooks = ({ books: { selected } = {}}) => selected;

export const enableEdit = createSelector(selectedBooks, selected => Boolean(selected.length === 1));

export const enableDelete = createSelector(selectedBooks, selected => Boolean(selected.length > 0));

export const bookSelectedForEdit = createSelector(selectedBooks, selected => selected[0]);