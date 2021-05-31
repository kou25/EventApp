import React from 'react';
import ReactDOM from 'react-dom';
import RouteContainer from './Routes';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import "./Static/css/primary.css";
import "./Static/css/grid.css";
import combineReducers from './Reducers';

import apiMiddleware from './Middleware';
const history = createHistory();
const middleware = routerMiddleware(history);

export default createHistory({forceRefresh: true});

export const store = createStore( combineReducers, 
    applyMiddleware(thunk, apiMiddleware.getApi, middleware));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <RouteContainer />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

