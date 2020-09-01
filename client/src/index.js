import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { userReducer, loginReducer, collectionReducer, toggleSidebar } from './reducers';
import { Provider } from 'react-redux';
import { userActions, collectionActions, subscribeToCollectionsAction } from './actions';
import firebaseApp from './firebase';
import thunk from 'redux-thunk';
const store = createStore(
  combineReducers({
    userInfo: userReducer,
    loginInfo: loginReducer,
    collectionInfo: collectionReducer,
    settings: toggleSidebar,
  }),
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App store={store} />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
