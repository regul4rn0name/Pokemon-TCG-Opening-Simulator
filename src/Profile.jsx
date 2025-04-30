import Signin from "./Signin";
import CardsStats from "./CardsStats";
import { useAppContext } from "./AppContext";
import { useState } from "react";
import {motion, AnimatePresence } from "framer-motion";

export default function Profile() {
    const {profile,cards} = useAppContext();
    const [isOpenStats,setStats] = useState(false);
    const [isOpenCards,setCards] = useState(false);
    const listVariants = {
        open: {
          height: 'auto',
          opacity: 1,
          transition: {
            when: 'beforeChildren',
            staggerChildren: 0.05,
          },
        },
        closed: {
          height: 0,
          opacity: 0,
          transition: {
            when: 'afterChildren',
            staggerChildren: 0.05,
            staggerDirection: -1,
          },
        },
      };
      
      const itemVariants = {
        open: { opacity: 1, y: 0 },
        closed: { opacity: 0, y: -10 },
      };
    return (<>
    <div className="max-h-screen overflow-y-auto no-scrollbar">
        
       <div className='bg-[#1E1E1E] p-8 rounded-[45px] shadow-[0_0_10px_rgba(255,255,255,0.1)] w-[80vw] text-center m-auto mb-[50px] mt-20 md:mt-7 '>
            <h2 className="mb-2.5">Welcome {profile.name}!</h2>
            <p className="text-sm mb-10">You can check your statiscs below</p>
            <button className="w-full bg-stone-800 px-4 py-2 rounded-2xl h-15 mb-7  hover:border-white hover:border-[3px] duration-25" onClick={()=>setStats(!isOpenStats)}>
                {isOpenStats ? "Hide Stats":"Show Stats"}
            </button>
            <AnimatePresence>
      {isOpenStats && (
        <motion.div
          key="stats"
          initial="closed"
          animate="open"
          exit="closed"
          variants={listVariants}
          className="grid md:grid-cols-4 gap-4 items mb-15"
        >
          {Object.entries(profile.CardsAmount).map(([rarity, amount]) => (
            <div
              key={rarity}
              
              className="p-4 border-2 rounded-2xl text-left shadow-lg shadow-stone-700"
            >
              <p>{rarity}</p>
              <p>{amount}</p>
            </div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
    <button
      className="w-full bg-stone-800 px-4 py-2 rounded-2xl h-15 mb-7  hover:border-white hover:border-[3px] duration-25"
      onClick={() => setCards(!isOpenCards)}
    >
      {isOpenCards ? "Hide Cards" : "Show Cards"}
    </button>
    <AnimatePresence>
      {isOpenCards && (
        <motion.div
          key="cards"
          initial="closed"
          animate="open"
          exit="closed"
          variants={listVariants}
          className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6"
        >
          {cards.map((card) => (
            <div key={card._id} variants={itemVariants}>
              <CardsStats card={card} />
            </div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
        </div>
    </div>
    </>);
}