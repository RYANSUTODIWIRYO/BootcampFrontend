import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./style.css"

import { Provider } from "react-redux"
// import { createStore } from "redux"
// import AllReducers from "./reducer"
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from "./store/"


// Create Redux Store
// const store = createStore(AllReducers)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>      
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);