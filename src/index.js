import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import reducer from './store/reducer';




// import 'bootstrap/dist/css/bootstrap.min.css';

axios.defaults.baseURL = 'https://ecom.xircular.io/v2/api';
//axios.defaults.baseURL = 'http://localhost:8999/api';

//redux store
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
