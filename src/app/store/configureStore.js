import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';

import counterSagas from '../components/Counter/sagas';

import rootReducer from './reducers';

const configureStore = initialState => {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [sagaMiddleware];

  const reduxDevTools = () => {
    if (window.__REDUX_DEVTOOLS_EXTENSION__) {
      return window.__REDUX_DEVTOOLS_EXTENSION__();
    }
    return f => f;
  };

  const enhancers = compose(applyMiddleware(...middlewares), reduxDevTools());

  const store = createStore(rootReducer, initialState, enhancers);

  sagaMiddleware.run(counterSagas);

  return store;
};

export default configureStore;
