import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'

import * as bookActions from '../../actions/book'
import BookList from '../bookList/'
import SearchBox from '../searchBox/'
import AddBookTrigger from '../addBook/';
import EditBookTrigger from '../addBook/EditBookTrigger';
import DeleteBookTrigger from '../addBook/DeleteBookTrigger';
import AddBook from '../addBook/Form';

export class Home extends Component {
  constructor(props){
    super(props)
    this.searchBooks = this.searchBooks.bind(this)
  }

  searchBooks(term){
    if(term.trim())
      this.props.searchBook(term);
    else {
      this.props.getBooks();
    }
  }

  render(){
    const { ui: { newBook }, books: { selected, editBook } } = this.props;
    return (
      <div className="container">
        <div className="row">
          <AddBookTrigger />
          { selected.length === 1 && <EditBookTrigger /> }
          {selected.length > 0 && <DeleteBookTrigger />}
        </div>
        <SearchBox search={this.searchBooks} />
        <BookList />
        {newBook && <AddBook />}
        {editBook && <AddBook editBook={editBook} />}
      </div>
    )
  }
};

const mapStateToProps = ({ books, ui }) => ({ books, ui });
const mapDispatchToProps = { 
    getBooks: bookActions.getBooks,
    searchBook: bookActions.searchBook,
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
