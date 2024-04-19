import React from 'react'
import ReactDOM from 'react-dom/client'
import { composeWithDevTools } from '@redux-devtools/extension';
import App from './App.tsx'
import { pokemonsReducer } from './reducers/pokemons.tsx'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux'
import { featuring, logger } from './middlewares/index.tsx';
import './index.css'


// import 'antd/dist/reset.css';
const composedEnhancers = compose(composeWithDevTools(), applyMiddleware(logger,featuring));

const store = createStore(pokemonsReducer,composedEnhancers);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>    
  </React.StrictMode>,
)
