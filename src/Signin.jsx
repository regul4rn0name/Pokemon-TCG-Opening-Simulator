import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function Signin() {
    const navigate = useNavigate();
    const [profile,setProfile] = useState(null);
    //https://cardsbackend.onrender.com/auth/google
    //http://localhost:3002/auth/google
    const logingithub = ()=>{
        window.open('http://localhost:3002/auth/github',"_self");
    }
    const logingoogle = ()=>{
        window.open('http://localhost:3002/auth/google',"_self");
    };
    const fetchProfile = async ()=>{
        try{
            const res = await axios.get('http://localhost:3001/profile',{withCredentials:true});
            setProfile(res.data.user);
            console.log(profile);
            

        }catch(error){
            console.error(error);
            
        }
    };
    useEffect(()=>{
        fetchProfile();
    },[]);
    return (
        <div className=' absolute top-0 m-auto mt-3.5 h-screen w-screen bg-[rgb(29,29,29)] left-0 items-center justify-center'>
            {!profile ? (<> <div className='bg-[#1E1E1E] p-8 rounded-[45px] shadow-[0_0_10px_rgba(255,255,255,0.1)] w-[550px] text-center m-auto mt-[50px] mb-[50px] h-fit'>
                <h2 className="mb-2.5">Sign In</h2>
                <p className="text-sm mb-5">Choose a sign-in method below.</p>
                <div className='gap-x-4'>
                    <button class="w-[35%] p-2.5 m-[10px] rounded-3xl cursor-pointer text-[16px] text-white items-center justify-center inline-flex h-[75px] bg-[#333] hover:border-[3px] duration-25 hover:border-white" onClick={logingithub}><img className='h-[45px] rounded-full' src='github-mark.png' /> Sign in with GitHub</button>
                    <button class="w-[35%] p-2.5 m-[10px] rounded-3xl cursor-pointer text-[16px] text-white items-center justify-center inline-flex h-[75px] bg-[#333] hover:border-[3px] duration-25 hover:border-white" onClick={logingoogle}><img className='h-[45px] rounded-full' src='google.webp' />Sign in with Google</button>
                </div>
            </div>
            <button className=" w-[150px] p-2.5 rounded-3xl cursor-pointer text-[16px] text-white items-center justify-center flex h-[75px] bg-[#333] hover:border-[3px] duration-25 hover:border-white m-auto" onClick={()=>navigate('/')}>Main Menu</button></>):(<><h3>Welcome, {profile.name}</h3>
                <p>id: {profile.id}</p></>)}
           
        </div>
    );
}

export default Signin;