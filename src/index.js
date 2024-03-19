import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import CursorProvider from './context/CursorContext';
// import cursor context provider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CursorProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CursorProvider>
);
