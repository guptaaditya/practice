import { put, takeEvery, takeLatest, all } from 'redux-saga/effects'
import apis from './Apis';

function* fetchBooks() {
    const books = yield fetch(apis.book).then(r => r.json());
    yield put({ type: "GET_BOOKS_SUCCESS", books });
}

function* filterBook({ term }){
  const books = yield fetch(`${apis.book}search?term=${term}`).then(r => r.json());
  yield put({ type: "GET_BOOKS_SUCCESS", books });
}

function* saveBook({ book }) {
  const savedBook = yield fetch(`${apis.book}`, { method: 'post', body: JSON.stringify(book) }).then(r => r.json());
  console.log(savedBook);
  yield put({ type: "GET_BOOKS" });
  yield put({ type: "CLOSE_ADD_NEW_BOOK" });
}

function* updateBook({ book }) {
  const updatedBook = yield fetch(`${apis.book}${book.id}`, { method: 'put', body: JSON.stringify(book) }).then(r => r.json());
  console.log(updatedBook);
  yield put({ type: "GET_BOOKS" });
  yield put({ type: "CLOSE_EDIT_BOOK" });
}

function* deleteBooks({ selectedBooks }) {
  const booksdeleted = selectedBooks.map(bookId => fetch(`${apis.book}${bookId}`, { method: 'DELETE' }).then(r => r.json()));
  yield Promise.all(booksdeleted);
  yield all(selectedBooks.map(function (bookId) {
    return put({ type: "UNSELECT_BOOK", bookId });
  }));
  yield put({ type: "GET_BOOKS" });
}

function* sagaGetBook() {
  yield takeLatest("FILTER_BOOK", filterBook);
}

function* sagaGetBooks() {
  yield takeEvery("GET_BOOKS", fetchBooks);
}

function* sagaSaveBook() {
  yield takeEvery("SAVE_BOOK", saveBook)
} 

function* sagaUpdateBook() {
  yield takeEvery('UPDATE_BOOK', updateBook)
}

function* sagaDeleteBooks() {
  yield takeEvery('DELETE_BOOKS', deleteBooks)
}

const entrySagas = [sagaGetBook, sagaGetBooks, sagaSaveBook, sagaUpdateBook, sagaDeleteBooks];

export default function initSagas(middleWare) {
	entrySagas.forEach(middleWare.run);
};