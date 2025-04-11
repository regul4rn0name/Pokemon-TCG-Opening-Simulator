import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({children})=>{
    const [profile,setProfile] = useState();
    const [cards,setCards] = useState();
    return (
        <AppContext.Provider value={{ profile, setProfile, cards, setCards }}>
          {children}
        </AppContext.Provider>
      );
}
export const useAppContext=()=>useContext(AppContext);