import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { onDeleteBook } from '../../actions/book'

function DeleteBookTrigger(props) {
  const onDeleteBookClick = () => {
    const proceed = window.confirm('Are you sure you want to delete the selected books? This action cannot be reversed!');
    if (proceed) {
      props.actions.onDeleteBook(props.selected);
    }
  }

  return (
    <button style={deleteBtnStyle} type="button" className="btn btn-primary" onClick={onDeleteBookClick}>Delete book(s)</button>
  );
}

const mapStateToProps = ({ books: { selected } }) => ({ selected });
const mapDispatchToProps = dispatch => { 
  return {
    actions: bindActionCreators({ onDeleteBook }, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(DeleteBookTrigger);

const deleteBtnStyle = {
  marginLeft: '10px',
};