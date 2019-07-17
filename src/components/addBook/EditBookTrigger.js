import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { openEditBook } from '../../actions/book'

function EditBookTrigger(props) {
  return (
    <button style={editBtnStyle} type="button" className="btn btn-primary" onClick={e => props.actions.openEditBook(props.selectedBook)}>Edit book</button>
  );
}

const mapStateToProps = ({ books: { selected } }) => ({ selectedBook: selected[0] });
const mapDispatchToProps = dispatch => { 
  return {
    actions: bindActionCreators({ openEditBook }, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(EditBookTrigger);

const editBtnStyle = {
  marginLeft: '10px',
};