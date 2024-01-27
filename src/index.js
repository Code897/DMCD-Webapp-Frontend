import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

document.title='DMCD'

const favicon = document.createElement('link');
favicon.rel = 'icon';
favicon.type = 'image/png';  // Adjust the type based on the image format
favicon.href = 'https://cdn.icon-icons.com/icons2/2518/PNG/512/letter_d_icon_151256.png';
document.head.appendChild(favicon);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
