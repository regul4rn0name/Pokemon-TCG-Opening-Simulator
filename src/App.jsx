import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Open from './Open';
import Home from './Home';
import Signin from './Signin';
import CardStats from './CardsStats';

function App() {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:open" element={<Open />} />
        <Route path="/signin" element={<Signin />} />
        <Route path='/test' element={<CardStats/>}/>
      </Routes>
    </Router>
  );
}

export default App;
