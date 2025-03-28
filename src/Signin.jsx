import { useNavigate } from "react-router-dom";
import Login from "./Login";
import Profile from "./Profile";
import axios from "axios";
import { useEffect, useState } from "react";

function Signin() {
    const navigate = useNavigate();
    const [profile, setProfile] = useState(null);

    const fetchProfile = async () => {
        try {
            const res = await axios.get('http://localhost:3001/profile', { withCredentials: true });
            setProfile(res.data.user);
            console.log(profile);


        } catch (error) {
            console.error(error);

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