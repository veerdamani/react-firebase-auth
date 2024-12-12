import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './screens/login';
import SignupPage from './screens/signup';
import Myprovider from './context/myprovider';
import ForgotPage from './screens/forgot';


function App() {
  return(
    <Myprovider>
    <Router>
        <Routes>
            <Route path='/' element={<LoginPage/>} />
            <Route path='signup' element={<SignupPage/>} />
            <Route path='forgot' element={<ForgotPage/>} />
        </Routes>
    </Router>
    </Myprovider>
  );
}

export default App;