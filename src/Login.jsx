
export default function Login() {
    const logingithub = () => {
        window.location.href = 'https://pokemon-tcg-opening-simulator.jajca.site/server/auth/auth/github';
    }
    
    const logingoogle = () => {
        window.location.href = 'https://pokemon-tcg-opening-simulator.jajca.site/server/auth/auth/google';
    };
    
    return (
        
            <div className='bg-[#1E1E1E] p-8 rounded-[45px] shadow-[0_0_10px_rgba(255,255,255,0.1)] md:w-[550px] text-center m-auto mb-[50px] absolute md:top-8 h-fit'>
                <h2 className="mb-2.5">Sign In</h2>
                <p className="text-sm mb-5">Choose a sign-in method below.</p>
                <div className='gap-x-4'>
                    <button className="w-[35%] p-2.5 m-[10px] rounded-full md:rounded-3xl cursor-pointer text-[16px] text-white items-center justify-center inline-flex h-[75px] bg-[#333] hover:border-[3px] duration-25 hover:border-white" onClick={logingithub}><img className='h-[45px] rounded-full' src='github-mark.png' /><p className="hidden md:block">Sign in with GitHub</p></button>
                    <button className="w-[35%] p-2.5 m-[10px] rounded-full md:rounded-3xl cursor-pointer text-[16px] text-white items-center justify-center inline-flex h-[75px] bg-[#333] hover:border-[3px] duration-25 hover:border-white" onClick={logingoogle}><img className='h-[45px] rounded-full' src='google.webp' /><p className="hidden md:block">Sign in with Google</p></button>
                </div>
            </div>
        
    );

}