import './App.css';
import React from 'react';
import Home from './components/Home';
import Emaillist from './components/Emaillist'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Survey from './components/Survey';
import BT5 from './components/BT5';
import Bt6 from './components/Bt6';
import Formsubmit from './components/Formsubmit';

function App() {
  return(
  <Router>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Emaillist" element={<Emaillist/>}/>
      <Route path="/Survey" element={<Survey/>}/>
      <Route path="/BT5" element={<BT5/>}/>
      <Route path="/BT6" element={<Bt6/>}/>
      <Route path="/Formsubmit" element={<Formsubmit/>}/>
    </Routes>
  </Router>
  )
}

export default App;
