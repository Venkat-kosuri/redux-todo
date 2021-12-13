import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './state/store'
import Todolist from './state/Todolist'
ReactDOM.render(
  <React.StrictMode>
   <Provider store={store}>
    <App />
    <Todolist />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


