import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import HomePage from './components/HomePage';
import store from './store/configureStore';


export default (store) => {
  return (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
  </Route>
);
};