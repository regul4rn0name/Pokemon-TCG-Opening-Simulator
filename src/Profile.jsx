import Signin from "./Signin";
import CardsStats from "./CardsStats";
import { useAppContext } from "./AppContext";

export default function Profile() {
    const {profile,cards} = useAppContext();
    return (<>
        <div className='bg-[#1E1E1E] p-8 rounded-[45px] shadow-[0_0_10px_rgba(255,255,255,0.1)] w-[80vw] text-center m-auto mt-[750px] mb-[50px] h-fit'>
            <h2 className="mb-2.5">Welcome {profile.name}!</h2>
            <p className="text-sm mb-10">You can check your statiscs below</p>
            <div className="grid grid-cols-4 gap-4 items mb-15">
                {Object.entries(profile.CardsAmount).map(([rarity,amount])=>(
                    <div key={rarity} className="p-4 border-2 rounded-2xl text-left  shadow-lg shadow-stone-700">
                        <p>{rarity}</p>
                        <p>{amount}</p>
                    </div>
                ))}
            </div>
            
            <div className="grid grid-cols-6 gap-4 items">
               {cards.map((card)=>(
                <CardsStats key={card._id} card={card}/>
               ))}
            </div>
            
        </div>

    </>);
}