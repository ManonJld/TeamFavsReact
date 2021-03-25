import React from 'react';
import ReactDOM from 'react-dom';
import 'bootswatch/dist/minty/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import reducer from "./reducers/reducer";
import thunk from "redux-thunk";
import {store} from "./_helpers/store";
//bien importer le css après bootstrap pour pouvoir overwriter les classes bootstrap

// const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));


ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
