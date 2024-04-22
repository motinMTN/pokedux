import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import rootReducer from './reducers/rootReducer.tsx'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux'
import { thunk } from 'redux-thunk';
import { logger } from './middlewares/index.tsx';
import './index.css'


// import 'antd/dist/reset.css';
const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancers = composeAlt(applyMiddleware(thunk, logger));

const store = createStore(rootReducer,composedEnhancers);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>    
  </React.StrictMode>,
)
