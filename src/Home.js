import { useNavigate } from 'react-router-dom';
import './Home.css';
import Open from './Open';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Outlet,
  } from "react-router-dom";


function Home() {
  
  const [matches, setMatches] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    var cardsimg = [];
    useEffect(() => {
      setLoading(true);
      setError(null);
      const source = axios.CancelToken.source();
      axios.get(`https://cardsbackend.onrender.com/table`, { cancelToken: source.token }).then(response => {
      
          if (response.data ) {
            setMatches(response.data)
            
            
          }
          else {
            console.error('No data available at the random index.');
            setMatches(null);
          }
        
  
  
      })
        .catch(error => {
          if (axios.isCancel(error)) {
            console.log('Request canceled:', error.message);
          } else {
            console.error('Error fetching data:', error);
            setError(error);
            setMatches(null);
          }
        })
        .finally(() => {
          setLoading(false);
        });
  
  
      return () => {
        source.cancel('Operation canceled by the user.');
      };
  
  
  
    }, [])
    const navigate = useNavigate();
    const handleRedirect = (table)=>{
        navigate("/open",{state:{table:table}});
    }

    return (
      <div id="jajca">
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error.message}</div>}
        {!loading && !error && (
          matches.map((table) => (
            <div key={table.name}>
              <button 
                onClick={() => handleRedirect(table.name)} 
                style={{ backgroundImage: `url(${table.logo})` }}
              />
              <p>{table.name}</p>
            </div>
          ))
        )}
      </div>
    );
}

export default Home;
