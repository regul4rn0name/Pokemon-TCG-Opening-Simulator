import React from 'react';
import { useState,useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Open from './Open';
import Home from './Home';
import Signin from './Signin';
import Cookies from 'js-cookie';

function App() {
    const [profile, setProfile] = useState();
    const [cards ,setCards] = useState([]);
    const token = Cookies.get('token');
    const reftoken = Cookies.get('reftoken');

    const fetchProfile = async () => {
        if(token!=null){
            try {
                const res = await axios.get('http://localhost:3001/users', { withCredentials: true });
                setProfile(res.data.data[0]);
                setCards(res.data.fullCards);
                console.log(res.data.data[0]);
                
    
    
            } catch (error) {
                console.error(error);
    
            }
        }else if(reftoken!=null){
            try {
                await axios.post('http://localhost:3002/token',{},{withCredentials:true});
                location.reload();
            } catch (error) {
                console.log(error);
                
            }
           
        }
        
    };
    useEffect(() => {
       fetchProfile();
    }, []);
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:open" element={<Open />} />
        <Route path="/signin" element={<Signin profile={profile} cards={cards} />} />
      </Routes>
    </Router>
  );
}

export default App;
