import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import createEncryptor from 'redux-persist-transform-encrypt'

import rootReducer from '../reducer'
 
const encryptor = createEncryptor({
  secretKey: 'my-super-secret-key-210297',
  onError: error => {
    // Handle the error
  }
})

const persistConfig = {
  key: 'root',
  storage,
  transform: [encryptor]
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer)
const persistor = persistStore(store)

export { store, persistor }


// export default () => {
//   let store = createStore(persistedReducer)
//   let persistor = persistStore(store)
//   return { store, persistor }
// }