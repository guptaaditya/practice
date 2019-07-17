import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { openAddNewBook } from '../../actions/book'

function AddBookTrigger({ actions: { openAddNewBook = () => {} } = {}}) {
  return (
    <button type="button" className="btn btn-primary" onClick={openAddNewBook}>Add new book</button>
  );
}

const mapDispatchToProps = dispatch => { 
  return {
    actions: bindActionCreators({ openAddNewBook }, dispatch)
  };
}
export default connect(null, mapDispatchToProps)(AddBookTrigger);
