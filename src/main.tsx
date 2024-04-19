import React from 'react'
import ReactDOM from 'react-dom/client'
import { composeWithDevTools } from '@redux-devtools/extension';
import App from './App.tsx'
import { pokemonsReducer } from './reducers/pokemons.tsx'
import { Provider } from 'react-redux'
import { legacy_createStore as createStore } from 'redux'
import './index.css'


// import 'antd/dist/reset.css';
const store = createStore(pokemonsReducer, composeWithDevTools());

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>    
  </React.StrictMode>,
)
