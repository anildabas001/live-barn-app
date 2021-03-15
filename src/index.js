import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import './index.css';
import 'fontsource-roboto';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStateManager from './Containers/GlobalStateManager';

ReactDOM.render(
  <React.StrictMode>   
    <CssBaseline />
    <GlobalStateManager>
      <App />  
    </GlobalStateManager>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
