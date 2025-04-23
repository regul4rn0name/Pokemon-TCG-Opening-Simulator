import { useNavigate } from 'react-router-dom';
import { setupCache } from 'axios-cache-interceptor';
import Axios from 'axios';
import React, { useState, useEffect,useRef } from 'react';
import Header from './Header';
import HomeLoading from './HomeLoading';


const instance = Axios.create();
const axios = setupCache(instance);

function Home() {
  const scrollref = useRef(null);
  const windowRef = useRef(null);
  const [matches, setMatches] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [up,setUp] = useState(true);
    useEffect(() => {
      setLoading(true);
      setError(null);
     const controller = new AbortController();
      axios.get(`http://localhost:3001/table`, { signal:controller.signal }).then(response => {
      
          if (response.data ) {
            setMatches(response.data.rows)
        
            
            
          }
          else {
            console.error('No data available.');
            setMatches([]);
          }
        
  
  
      })
        .catch(error => {
          if (axios.isCancel(error)) {
            console.log('Request was canceled:', error.message);
            return; // Exit early without setting error state
          }
          console.error('Error fetching data:', error);
          setError(error);
        })
        .finally(() => {
          setLoading(false);
        });
  
  
      return ()=>controller.abort();
  
  
  
    }, [])
    const navigate = useNavigate();
    const handleRedirect = (table)=>{
        navigate("/"+table);
    }
    const scroll = ()=>{
      if (up) {
        windowRef.current.scrollTo({
          top: windowRef.current.scrollHeight,
          behavior: "smooth"
        });
      }else{
        windowRef.current.scrollTo({
          top:0,
          behavior:"smooth"
        })
      }
    }
    const handlescroll=(e)=>{
      const {scrollTop,scrollHeight,clientHeight} = e.target;
      const scrollRatio = scrollTop/(scrollHeight-clientHeight);
      if(scrollRatio<=0.5 && !up){
        setUp(true)
        
      }else if(up && scrollRatio>0.5){
        setUp(false)
      }
      console.log(up);
      
    }
    useEffect(()=>{
      if (scrollref.current) {
        scrollref.current.style.transform = up ? "rotate(0deg)" : "rotate(180deg)";
      }
      
    },[up]);
    return (
      <div id="jajca" ref={windowRef} className='flex flex-wrap justify-center h-screen overflow-y-auto flex-grow text-white gap-x-5 gap-y-5 text-center bg-[rgb(29,29,29)] ' onScroll={handlescroll}>
        {loading && <HomeLoading/>}
        {error && <div>Error: {error.message}</div>}
        {!loading && !error &&<Header/> && (
          <div className='bg-[rgb(77,76,76)] h-11 w-11 flex justify-end fixed bottom-4 right-4 rounded-full'>
            <button className='rounded-full bg-[rgb(77,76,76)] h-11 w-11  hover:border-white hover:border-[3px]  duration-25 rotate-180' ref={scrollref} onClick={scroll}>&uarr;</button>
          </div>
        )}
        {!loading && !error  && (
          matches.map((table) => (
            <div key={table.name}>
              <button className='md:w-[456px] md:h-[256px] mt-5  w-[456px] h-[256px] sm:h-[128px] sm:w-[233px] bg-no-repeat bg-contain bg-center bg-[rgb(22,34,73)] shadow-none border-[3px] border-[rgb(22,34,73)] rounded-2xl duration-25 hover:border-[#646cff]' 
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
