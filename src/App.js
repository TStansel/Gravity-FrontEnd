import React from 'react'
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import theme from './Theme';
import Header from './components/Header';
import Footer from './components/Footer';
import { ThemeProvider } from '@mui/material'; 
import LandingPage from './pages/LandingPage';
import Services from './pages/Services';
import Revolution from './pages/Revolution';
import About from './pages/About';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Contact from './pages/Contact';

const App = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [value, setValue] = useState(0);

  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
          <Routes>
            <Route path='/' element={<LandingPage setValue={setValue} setSelectedIndex={setSelectedIndex}/>}/>
            <Route path='/services' element={<Services setValue={setValue} setSelectedIndex={setSelectedIndex}/>}/>
            <Route path='/howitworks' element={<Revolution setValue={setValue} setSelectedIndex={setSelectedIndex}/>}/>
            <Route path='/about' element={<About setValue={setValue} setSelectedIndex={setSelectedIndex}/>}/>
            <Route path='/contact' element={<Contact setValue={setValue} setSelectedIndex={setSelectedIndex}/>}/>
          </Routes>
          <Footer setValue={setValue} setSelectedIndex={setSelectedIndex}/>
        </ThemeProvider>
      </Router>
      <ToastContainer/>
    </>
  )
}

export default App