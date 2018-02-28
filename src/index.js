import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import './index.css';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';
import { authReducer } from './auth/auth.reducer';
import { userReducer } from './sign-up/user.reducer';
import { authMiddleware } from './auth/auth.middleware';
import { userMiddleware } from './sign-up/user.middleware';

const awaas = combineReducers({
  authReducer,
  userReducer
});

let store = createStore(awaas, applyMiddleware(authMiddleware, userMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
