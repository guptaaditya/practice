import { connect } from 'react-redux'

import BookList from './component';

import { getBooks } from '../../actions/book'
import { booksListSelector } from '../../selectors/book'

const mapStateToProps = state => ({ 
  books: booksListSelector(state)
});
export default connect(mapStateToProps, { getBooks })(BookList);
