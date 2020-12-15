import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {rootReducer} from './reducers';

import {createLogger} from 'redux-logger';

const loggerMiddleware = createLogger();

const store = createStore(rootReducer, applyMiddleware(
  loggerMiddleware
))

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
