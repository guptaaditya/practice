import { connect } from 'react-redux'
import EditBookTrigger from './component';

import { openEditBook } from '../../actions/book'
import { bookSelectedForEdit } from '../../selectors/book'

const mapStateToProps = state => ({ 
    selectedBook: bookSelectedForEdit(state),
});
export default connect(mapStateToProps, { openEditBook })(EditBookTrigger);
  