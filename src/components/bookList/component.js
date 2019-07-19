import React from 'react'
import BookCard from '../bookCard/'

export default class BookList extends React.Component {

  componentDidMount() {
    this.props.getBooks();
  }

  render() {
    const { books } = this.props;
    return (
      <div className="row">
        { books.map((book, index) => <BookCard key={index} book={book} />) }
      </div>
    )
  }
};