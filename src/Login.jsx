
export default function Login() {
    const logingithub = () => {
        window.open('http://localhost:3002/auth/github', "_self");
    }
    const logingoogle = () => {
        window.open('http://localhost:3002/auth/google', "_self");
    };
    return (
        <>
            <div className='bg-[#1E1E1E] p-8 rounded-[45px] shadow-[0_0_10px_rgba(255,255,255,0.1)] w-[550px] text-center m-auto mt-[50px] mb-[50px] h-fit'>
                <h2 className="mb-2.5">Sign In</h2>
                <p className="text-sm mb-5">Choose a sign-in method below.</p>
                <div className='gap-x-4'>
                    <button className="w-[35%] p-2.5 m-[10px] rounded-3xl cursor-pointer text-[16px] text-white items-center justify-center inline-flex h-[75px] bg-[#333] hover:border-[3px] duration-25 hover:border-white" onClick={logingithub}><img className='h-[45px] rounded-full' src='github-mark.png' /> Sign in with GitHub</button>
                    <button className="w-[35%] p-2.5 m-[10px] rounded-3xl cursor-pointer text-[16px] text-white items-center justify-center inline-flex h-[75px] bg-[#333] hover:border-[3px] duration-25 hover:border-white" onClick={logingoogle}><img className='h-[45px] rounded-full' src='google.webp' />Sign in with Google</button>
                </div>
            </div>
        </>
    );

}