import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MyRoute from './MyRoute';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {devToolsEnhancer} from 'redux-devtools-extension'
import {animeListReducer} from './reducers/animeListReducer'
const store=createStore(animeListReducer,devToolsEnhancer())
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
