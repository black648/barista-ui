import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import reducer from './stores';
import {createStore} from "redux";

// const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

