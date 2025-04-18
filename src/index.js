import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';        // make sure this path is correct
import './index.css';          // your global styles

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode> can stay or be removed if it trips warnings
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
