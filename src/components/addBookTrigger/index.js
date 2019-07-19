import { connect } from 'react-redux'

import AddBookTrigger from './component'

import { openAddNewBook } from '../../actions/book'

export default connect(null, { openAddNewBook })(AddBookTrigger);
