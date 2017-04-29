import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import {createBrowserHistory, createHashHistory} from 'history';
import {routerMiddleware, ConnectedRouter, syncHistoryWithStore} from 'react-router-redux';
import Thunk from 'redux-thunk';

import '../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import './scss/app.scss';

import Routes from './routes';
import reducers from './reducers';

// const history = createBrowserHistory({
//   base: '/b-site/'
// });
const hashHistory = createHashHistory();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [Thunk, routerMiddleware(hashHistory)];

const store = createStore(reducers, composeEnhancers(
  applyMiddleware(...middleware)
));

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={hashHistory} children={Routes} />
  </Provider>
  , document.querySelector('.app-container'));