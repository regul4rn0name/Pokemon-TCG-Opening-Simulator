import { useNavigate } from "react-router-dom";
import Login from "./Login";
import Profile from "./Profile";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useAppContext } from "./AppContext";


function Signin() {
    const navigate = useNavigate();
    const {profile} = useAppContext();
    

    return (
        <div className='m-auto min-h-screen h-fit w-screen bg-[rgb(29,29,29)] items-center justify-center bg-gradient-to-b from-stone-900 to-neutral-700'>
            <br/>
             <button className=" border-2 border-black fixed top-1 left-0 w-28 ml-1.5 p-2.5 rounded-3xl cursor-pointer text-[16px] text-white items-center justify-center flex h-[75px] bg-[#333] hover:border-4 duration-25 hover:border-white m-auto" onClick={()=>navigate('/')}>Main Menu</button>
            {!profile ? (
                <Login/>
            ):
            (
                <Profile/>
            )}
           
        </div>
    );
}

export default Signin;