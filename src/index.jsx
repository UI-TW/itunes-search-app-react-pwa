// Application entrypoint.

// Load up the application styles

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import  { Provider } from 'react-redux';
import Store from './store';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

const StoreInstance = Store();
ReactDOM.render(
  <Provider store={ StoreInstance }>
    <App/>
  </Provider>,
  document.getElementById('react-root')
);
