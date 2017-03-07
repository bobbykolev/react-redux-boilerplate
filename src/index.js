/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { Provider } from 'react-redux';
import { getData } from './actions/actions';
import configureStore from './store/configureStore';
import { syncHistoryWithStore } from 'react-router-redux';
require('es6-promise').polyfill();
import './utils/polyfills';
import './styles/styles.scss';

const store = configureStore();
store.dispatch(getData());

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>, document.getElementById('app')
);
