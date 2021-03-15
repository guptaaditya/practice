import { connect } from 'react-redux'

import BookCard from './component'

import { onSelectBook, onUnselectBook } from '../../actions/book'
import { selectedBooks } from '../../selectors/book'

const mapStateToProps = state => ({ 
  selected: selectedBooks(state)
});
const mapDispatchToProps = { onSelectBook, onUnselectBook };
export default connect(mapStateToProps, mapDispatchToProps)(BookCard);