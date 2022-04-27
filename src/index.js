import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MyRoute from './MyRoute';
import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import {rootReducer} from './reducers/rootReducer'
import thunk from 'redux-thunk'
const middleware =[thunk]
const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(...middleware)))
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MyRoute/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
