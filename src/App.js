import React from 'react'
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import theme from './Theme';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import { ThemeProvider } from '@mui/material'; 
import Pricing from './pages/Pricing';

const App = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [value, setValue] = useState(0);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/pricing' element={<Pricing/>}/>
        </Routes>
        <Footer/>
      </ThemeProvider>
    </Router>
  )
}

export default App