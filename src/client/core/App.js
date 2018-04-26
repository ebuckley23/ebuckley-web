import React, {PureComponent} from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import {Provider} from 'react-redux';
import rootReducer from '../reducers';

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : _ => _;

const configureStore = (initialState) => {
  return createStore(
    rootReducer,
    applyMiddleware(promiseMiddleware()),
    process.env.NODE_ENV === 'development' ? reduxDevTools : undefined
    );
}
export default class App extends PureComponent {
  render() {
    return (
      <Provider store={configureStore()}>
        <Router>
          <Switch>
          <Route exact path='/' render={(props) => {
            return (
              <div>React routing in progress</div>
            )
          }} />
          <Route path='/test' render={(props) => {
            return (
              <div>Test Route</div>
            )
          }} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}