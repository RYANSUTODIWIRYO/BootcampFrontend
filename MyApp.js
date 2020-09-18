import React, { Component } from 'react'
import App from "./App"

// Redux and Redux Persist
import { Provider } from "react-redux"
import { store, persistor } from "./store"
import { PersistGate } from "redux-persist/integration/react"

// SQLite
import SQLite from "react-native-sqlite-storage"

global.db = SQLite.openDatabase(
    {
      name: 'SQLLogin.db',
    //   location: 'default',
    //   createFromLocation: '~SQLLogin.db',
    },
    () => { },
    error => {
      console.log("ERROR: " + error);
    }
);

class MyApp extends Component {
    render(){
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>                    
                    <App/>
                </PersistGate>
            </Provider>
        )
    }
}

export default MyApp