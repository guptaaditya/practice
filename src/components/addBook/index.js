import { connect } from 'react-redux'

import AddBook from './component'

import { onAddBookSave, onAddBookClose, onEditBookSave, onEditBookClose } from '../../actions/book'
import { editBook, openNewBookForm } from '../../selectors/book'

const mapStateToProps = state => ({ 
  editBook: editBook(state), 
  newBook: openNewBookForm(state), 
});

const mapDispatchToProps = { 
    onAddBookSave, 
    onAddBookClose, 
    onEditBookSave, 
    onEditBookClose 
};
export default connect(mapStateToProps, mapDispatchToProps)(AddBook);
