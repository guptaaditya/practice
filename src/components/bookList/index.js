import React, { Component } from 'react'
import { connect } from 'react-redux'
import BookCard from '../bookCard/'

class BookList extends Component {
  render() {
    let books = this.props.books.map((book, index) => {
      return <BookCard id={book.id} key={index} title={book.title} image={book.coverImage} author={book.author} />
    });
    return (
      <div className="row" style={{paddingTop: '1%'}}>
        {books}
      </div>
    )
  }
};
const mapStateToProps = ({ books: { books } }) => ({ books });
export default connect(mapStateToProps)(BookList);
