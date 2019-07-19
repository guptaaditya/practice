import { connect } from 'react-redux'

import DeleteBookTrigger from './component';

import { onDeleteBook } from '../../actions/book'
import { selectedBooks } from '../../selectors/book'

const mapStateToProps = state => ({ 
    selected:   selectedBooks(state) 
});
export default connect(mapStateToProps, { onDeleteBook })(DeleteBookTrigger);
  