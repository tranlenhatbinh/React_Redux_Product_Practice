import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { applyMiddleware, createStore } from 'redux';
import appReducers from './reducers/index'
import {Provider} from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const store = createStore (
  appReducers,
  window._REDUX_DEVTOOLS_EXTENSION_&& window._REDUX_DEVTOOLS_EXTENSION_(),
  applyMiddleware(thunk, logger)
)

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
document.getElementById('root'));
registerServiceWorker();
