import { combineReducers } from 'redux'
import books from './book'
import ui from './ui'

const rootReducer = combineReducers({
  books,
  ui
})

export default rootReducer
