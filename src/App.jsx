import React from 'react';
import { useState,useEffect,useContext } from 'react';
import { AppProvider, useAppContext } from './AppContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Open from './Open';
import Home from './Home';
import Signin from './Signin';
import fetchProfile from './fetchProfile';

function AppRoutes(){
  const { setProfile, setCards } = useAppContext();
  useEffect(() => {
     fetchProfile(setCards,setProfile);
  }, []);
return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:open" element={<Open />} />
      <Route path="/signin" element={<Signin/>} />
    </Routes>
);
}

function App() {
  return(
    <AppProvider>
      <Router>
        <AppRoutes/>
      </Router>
    </AppProvider>
   
  );
}

export default App;
