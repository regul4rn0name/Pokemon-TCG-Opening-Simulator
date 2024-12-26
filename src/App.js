import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Open from './Open';
import Home from './Home';

function App() {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/open" element={<Open />} />
        <Route path="/openmore" element={<Open />} />
      </Routes>
    </Router>
  );
}

export default App;
