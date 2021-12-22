import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';
import './index.scss'

ReactDOM.render(
  <React.Fragment>
    <HashRouter>
      <App />
    </HashRouter>
  </React.Fragment>,
  document.getElementById('root')
);

reportWebVitals();
