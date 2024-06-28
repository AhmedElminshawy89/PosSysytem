import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/Store';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <ToastContainer />
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
