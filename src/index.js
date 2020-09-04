import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./style.css"

import { Provider } from "react-redux"
import { createStore } from "redux"
import AllReducers from "./reducer"

// Create Redux Store
const store = createStore(AllReducers)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>      
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);