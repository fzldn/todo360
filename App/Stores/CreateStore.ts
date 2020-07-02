import createSagaMiddleware, {Saga} from 'redux-saga';
import {applyMiddleware, createStore, compose, Reducer} from 'redux';
import {persistStore} from 'redux-persist';
import {createLogger} from 'redux-logger';

export default (persistedReducer: Reducer, rootSaga: Saga) => {
  const middlewares = [];
  const enhancers = [];

  // Connect the sagas to the redux store
  const sagaMiddleware = createSagaMiddleware();
  middlewares.push(sagaMiddleware);

  if (process.env.NODE_ENV === 'development') {
    const logger = createLogger({duration: true});
    middlewares.push(logger);
  }

  enhancers.push(applyMiddleware(...middlewares));

  const store = createStore(persistedReducer, compose(...enhancers));
  const persistor = persistStore(store);

  // purges state from disk and returns a promise
  // persistor.purge();

  // Kick off the root saga
  sagaMiddleware.run(rootSaga);

  return {store, persistor};
};
