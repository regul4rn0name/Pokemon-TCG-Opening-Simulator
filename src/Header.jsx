
import { Navigate, useNavigate } from 'react-router-dom';

function Header(){
    const navigate = useNavigate();
    return (
        <div className='w-screen h-[50px] mb-[15px] bt-[15px] flex justify-end fixed top-0 left-0'>

             <button className='h-[50px] w-[100px] mr-6 bg-[rgb(77,76,76)] rounded-2xl hover:border-white hover:border-[3px] duration-25' id='signin' onClick={()=>navigate("/signin")}>Sign in</button>

         
            
        </div>
    );
}
export default Header;