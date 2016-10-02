import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';

import Root from 'containers/Root';
import reducers from 'reducers';
import api from './middleware/api';

const store = compose(
  applyMiddleware(thunk, api)
)(createStore)(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
);
