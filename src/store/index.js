import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers/'
import createSagaMiddleware from 'redux-saga';
import initSagas from '../sagas';
const sagaMiddleware = createSagaMiddleware();

export default function storeConfigurer(initState){
  const store = createStore(
    rootReducer,
    initState,
    applyMiddleware(sagaMiddleware),
  );
  initSagas(sagaMiddleware);
  return store;
}
