import { useNavigate } from "react-router-dom";
import Login from "./Login";
import Profile from "./Profile";
import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';

function Signin() {
    const navigate = useNavigate();
    const [profile, setProfile] = useState();
    const token = Cookies.get('token');
    const reftoken = Cookies.get('reftoken');

    const fetchProfile = async () => {
        if(token!=null){
            try {
                const res = await axios.get('http://localhost:3001/users', { withCredentials: true });
                setProfile(res.data[0]);
                console.log(res.data[0].CardsAmount);
                
    
    
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
        <div className='m-auto min-h-screen h-fit w-screen bg-[rgb(29,29,29)] items-center justify-center bg-gradient-to-b from-stone-900 to-neutral-700'>
            <br/>
             <button className=" fixed top-1 left-0 w-28 ml-1.5 p-2.5 rounded-3xl cursor-pointer text-[16px] text-white items-center justify-center flex h-[75px] bg-[#333] hover:border-[3px] duration-25 hover:border-white m-auto" onClick={()=>navigate('/')}>Main Menu</button>
            {!profile ? (
                <Login/>
            ):
            (
                <Profile profile={profile}/>
            )}
           
        </div>
    );
}

export default Signin;