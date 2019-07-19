import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import RoutesList from './routes/';
import storeConfigurer from './store/'
import './index.css';
const store = storeConfigurer()

ReactDOM.render(
  <Provider store={store}>
    <RoutesList />
  </Provider>,
  document.getElementById('onlyelement')
)
