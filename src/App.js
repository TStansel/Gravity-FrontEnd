import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/index';
import Demo from './pages/demo';
import AddToSlack from './pages/addtoslack';
import ThankYou from './pages/thankyou';
import './App.css';


const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/getdemo" element={<Demo/>} />
          <Route path="/thankyou" element={<ThankYou/>} />
          <Route path="/addtoslack" element={<AddToSlack/>} />
        </Routes>
      </Router>
  );
};

export default App;


