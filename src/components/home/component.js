import React from 'react'

import AddBook from '../addBook';
import AddBookTrigger from '../addBookTrigger';
import BookList from '../bookList'
import DeleteBookTrigger from '../deleteBookTrigger';
import EditBookTrigger from '../editBookTrigger';
import SearchBox from '../searchBox'

export default class Home extends React.Component {
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
    const { enableEdit, enableDelete } = this.props;
    return (
      <div className="container">
        <div className="row">
          <AddBookTrigger />
          { enableEdit && <EditBookTrigger /> }
          {enableDelete && <DeleteBookTrigger />}
        </div>
        <SearchBox search={this.searchBooks} />
        <BookList />
        <AddBook />
      </div>
    )
  }
};