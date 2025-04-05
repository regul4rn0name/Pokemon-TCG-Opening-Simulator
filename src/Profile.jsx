import Signin from "./Signin";

export default function Profile({ profile }) {

    return (<>
        <div className='bg-[#1E1E1E] p-8 rounded-[45px] shadow-[0_0_10px_rgba(255,255,255,0.1)] w-[80vw] text-center m-auto mt-[250px] mb-[50px] h-fit'>
            <h2 className="mb-2.5">Welcome {profile.name}!</h2>
            <p className="text-sm mb-10">You can check your statiscs below</p>
            <div className="grid grid-cols-4 gap-4 items">
                {Object.entries(profile.CardsAmount).map(([rarity,amount])=>(
                    <div key={rarity} className="p-4 border-2 rounded-2xl text-left  shadow-lg shadow-stone-700">
                        <p>{rarity}</p>
                        <p>{amount}</p>
                    </div>
                ))}
            </div>

        </div>

    </>);
}