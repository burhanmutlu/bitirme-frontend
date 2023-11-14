import React from 'react';
import ReactDOM from 'react-dom/client';
import "./bootstrap-override.scss"
import reportWebVitals from './reportWebVitals';
import UserSignupPage from "./pages/UserSignupPage";
import UserLoginPage from "./pages/UserLoginPage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserLoginPage />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();