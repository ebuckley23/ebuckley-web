import React from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import {Provider} from 'react-redux';
import rootReducer from '../reducers';
import Theme from './components/Theme';
import AsyncComponent from './components/AsyncComponent';

import Web from './Web';

const MyStyleGuide = AsyncComponent(() => import('../my-style-guide'));
const Resume = AsyncComponent(() => import('../resume'));

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : _ => _;

const configureStore = () => createStore(
  rootReducer,
  process.env.NODE_ENV === 'development'
    ? compose(applyMiddleware(promiseMiddleware()), reduxDevTools)
    : applyMiddleware(promiseMiddleware())
);

const AppRoutes = () => (
  <Switch>
    <Route exact path='/' component={Resume} />
    <Route exact path='/style-guide' component={MyStyleGuide} />
  </Switch>
);

export default () => (
  <Provider store={configureStore()}>
    <Router>
      <Route render={props => (
        <Theme {...props}>
          <Route render={() => (
            // pass props, specifically location prop so that
            // outer component doesn't block the rest of routes
            // from updating
            <Web {...props}>
              <AppRoutes />
            </Web>
            )
          }
          />
        </Theme>
        )
      }
      />
    </Router>
  </Provider>
);
