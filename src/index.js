import React from 'react';
// const React=require("react"); =上面那一行
import ReactDOM from 'react-dom/client';
import App from './App';

// 將內容渲染到畫面上
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

