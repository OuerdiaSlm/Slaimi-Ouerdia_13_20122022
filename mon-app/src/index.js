import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Homepage from './pages/homepage';
import SingInPage from './pages/SingInPage';
import UserPage from './pages/UserPage';
import { Provider } from 'react-redux'
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../src/feature/users.slice"


const store = configureStore({
  reducer: {  
    user: userSlice
  }
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> 
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage/>}/>
          <Route exact path="/SingInPage" element={<SingInPage/>}/>
          <Route exact path="/UserPage" element={<UserPage/>}/>
        </Routes>
      </Router>
    </Provider> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
