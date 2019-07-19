import { connect } from 'react-redux'
import Home from './component';
import { editBook, openNewBookForm, enableEdit, enableDelete } from '../../selectors/book'
import * as bookActions from '../../actions/book'

const mapStateToProps = state => ({ 
  editBook: editBook(state), 
  newBook: openNewBookForm(state), 
  enableEdit: enableEdit(state), 
  enableDelete: enableDelete(state),
});
const mapDispatchToProps = { 
    getBooks: bookActions.getBooks,
    searchBook: bookActions.searchBook,
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
