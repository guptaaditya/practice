import { connect } from 'react-redux'

import AddBook from './component'

import { onAddBookSave, onAddBookClose, onEditBookSave, onEditBookClose } from '../../actions/book'

const mapDispatchToProps = { 
    onAddBookSave, 
    onAddBookClose, 
    onEditBookSave, 
    onEditBookClose 
};
export default connect(null, mapDispatchToProps)(AddBook);
