
import { Navigate, useNavigate } from 'react-router-dom';
import { useAppContext } from './AppContext';
import { useEffect } from 'react';
import fetchProfile from './fetchProfile';

function Header(){
    const navigate = useNavigate();
    const {profile}  = useAppContext();
    
    
    
    return (
    
        <div className='w-fit h-[50px] mb-[15px] bt-[15px] flex justify-end fixed top-2 right-0 z-50'>
            {!profile ?(
                <button className='h-[50px] w-[100px] mr-6 bg-[rgb(77,76,76)] rounded-2xl hover:border-white hover:border-[3px] duration-25 z-50' id='signin' onClick={()=>navigate("/signin")}>Sign in</button>
            ):(
                <button className='h-[50px] w-[100px] mr-6 bg-[rgb(77,76,76)] rounded-2xl hover:border-white hover:border-[3px] duration-25 z-50' id='signin' onClick={()=>navigate("/signin")}>Profile</button>
            )}
             

         
            
        </div>
    );
}
export default Header;