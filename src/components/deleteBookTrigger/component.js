import React from 'react'

export default class DeleteBookTrigger extends React.Component {
  constructor() {
    super();
    this.onDeleteBookClick = this.onDeleteBookClick.bind(this);
  }
  
  onDeleteBookClick() {
    const proceed = window.confirm('Are you sure you want to delete the selected books? This action cannot be reversed!');
    if (proceed) {
      const { onDeleteBook, selected } = this.props;
      onDeleteBook(selected);
    }
  }

  render() {
    return (
      <button type="button" className="btn btn-primary ml-10" onClick={this.onDeleteBookClick}>Delete book(s)</button>
    );
  }
}