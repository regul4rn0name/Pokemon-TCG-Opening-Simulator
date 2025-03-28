import Signin from "./Signin";

export default function Profile({profile}) {
    
    return (<>
        <div className='bg-[#1E1E1E] p-8 rounded-[45px] shadow-[0_0_10px_rgba(255,255,255,0.1)] w-[80vw] text-center m-auto mb-[50px] h-fit'>
            <h2 className="mb-2.5">Welcome {profile.name}!</h2>
            <p className="text-sm mb-5">You can check your statiscs below</p>


        </div>

    </>);
}