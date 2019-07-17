import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import RoutesList from './routes/';
import storeConfigurer from './store/'
import { getBooks } from './actions/book'
const store = storeConfigurer()
store.dispatch(getBooks())

ReactDOM.render(
  <Provider store={store}>
    <RoutesList />
  </Provider>,
  document.getElementById('onlyelement')
)
