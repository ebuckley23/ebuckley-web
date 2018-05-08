import React, {PureComponent} from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import {Provider} from 'react-redux';
import rootReducer from '../reducers';
import Theme from './components/Theme';
import {appMode} from '../constants';
import AsyncComponent from './components/AsyncComponent';

import Web from './Web';

const MyStyleGuide = AsyncComponent(_ => import('../my-style-guide'));
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : _ => _;

const configureStore = (initialState) => {
  return createStore(
    rootReducer,
    process.env.NODE_ENV === 'development'
      ? compose(applyMiddleware(promiseMiddleware()), reduxDevTools)
      : applyMiddleware(promiseMiddleware())
    );
}

const AppRoutes = () => (
  <Switch>
    <Route exact path='/' render={(props) => <div>Test page</div>} />
    <Route exact path='/style-guide' component={MyStyleGuide} />
  </Switch>
);
export default class App extends PureComponent {
  render() {
    return (
      <Provider store={configureStore()}>
        <Router>
          <Route render={(props) => {
            return (
              <Theme {...props}>
                <Route render={(props) => {
                  return (
                    // pass props, specifically location prop so that
                    // outer component doesn't block the rest of routes
                    // from updating
                    <Web {...props}>
                      <AppRoutes />
                    </Web>
                    )
                }} />
              </Theme>
            )
          }} />
        </Router>
      </Provider>
    )
  }
}