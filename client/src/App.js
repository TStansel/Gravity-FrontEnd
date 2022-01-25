import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/index';
import SigninPage from './pages/signin';
import AddToSlack from './pages/addtoslack';


const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signin" element={<SigninPage/>} />
          <Route path="/addtoslack" element={<AddToSlack/>} />
        </Routes>
      </Router>
  );
};

export default App;


