import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import ReduxCombinedReducers from './ReduxCombinedReducers'
import ReduxApp from './ReduxApp';
import 'bootstrap/dist/css/bootstrap.css';

const middleware = [ thunk ];
middleware.push(createLogger());

const store = createStore(
  ReduxCombinedReducers,
  applyMiddleware(...middleware)
)

render((
  <Provider store={store}>
    <BrowserRouter>
      <ReduxApp />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));
