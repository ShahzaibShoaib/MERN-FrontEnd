import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import SignUp from './components/SignUp';
import Homepage from './components/Homepage';



function App() {




  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/signup' element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
