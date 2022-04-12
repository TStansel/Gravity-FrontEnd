import React from 'react'
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import theme from './Theme';
import Header from './components/Header';
import Footer from './components/Footer';
import { ThemeProvider } from '@mui/material'; 
import Pricing from './pages/Pricing';
import LandingPage from './pages/LandingPage';
import Services from './pages/Services';
import CustomSoftware from './pages/CustomSoftware';

const App = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [value, setValue] = useState(0);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
        <Routes>
          <Route path='/' element={<LandingPage setValue={setValue} setSelectedIndex={setSelectedIndex}/>}/>
          <Route path='/pricing' element={<Pricing/>}/>
          <Route path='/services' element={<Services setValue={setValue} setSelectedIndex={setSelectedIndex}/>}/>
          <Route path='/customsoftware' element={<CustomSoftware setValue={setValue} setSelectedIndex={setSelectedIndex}/>}/>
        </Routes>
        <Footer setValue={setValue} setSelectedIndex={setSelectedIndex}/>
      </ThemeProvider>
    </Router>
  )
}

export default App