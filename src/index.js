import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'raf';

import * as OfflinePluginRuntime from 'offline-plugin/runtime';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './common/redux/rootReducer';
import rootSaga from './common/redux/rootSagas';
import App from './common/components/App';
import './common/scss/main.scss';

OfflinePluginRuntime.install();

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  thunkMiddleware,
  sagaMiddleware
];
/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

const store = createStore(
  rootReducer, process.env.NODE_ENV === 'development'
    ? composeEnhancers(applyMiddleware(...middlewares))
    : applyMiddleware(...middlewares)
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
