import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import './style.scss';

const createStoreWithMiddleware = applyMiddleware()(createStore);

const App = () => (
  <div>Hello world!</div>
);


ReactDOM.render((
  <Provider store={reducers} >
    <App />
  </Provider>
), document.getElementById('app'));