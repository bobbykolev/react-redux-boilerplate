import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import MainPage from './containers/MainPage';
import About from './components/About';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={MainPage}/>
    <Route path="/about" component={About}/>
    <Route path="*" component={MainPage}/>
  </Route>
);
