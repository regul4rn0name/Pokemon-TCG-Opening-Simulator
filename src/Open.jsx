import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import React, { useState, useEffect, useCallback, useContext,useRef } from 'react';
import { useLocation } from 'react-router-dom';
import rarities from './rarities.json';
import Card from './Card';

import { useAppContext } from './AppContext';
import Push from './Push';

function Open() {


  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  }

  const navigate = useNavigate();

  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { profile } = useAppContext();
  const [card, setCard] = useState([]);
  const cards = useRef([]);
  const buttons = useRef(null);
  const addRef = (index)=>(el)=>{
    cards.current[index] = el;
  }

  const table = useLocation().pathname;

  useEffect(() => {
    setLoading(true);
    setError(null);
    const source = axios.CancelToken.source();
    //https://pokemon-tcg-opening-simulator.jajca.site/server
    //http://localhost:3001
    axios.get(`https://pokemon-tcg-opening-simulator.jajca.site/server${table}`, { cancelToken: source.token }).then(response => {

      if (response.data) {
        setMatches(response.data.rows)
        const cloned = response.data.rows.map(card => ({ ...card }));
        setCard(cloned);


        //console.log(matches);


      }
      else {
        console.error('No data available at the random index.');
        setMatches(null);
      }



    })
      .catch(error => {
        if (axios.isCancel(error)) {
          console.log('Request canceled:', error.message);
        } else {
          console.error('Error fetching data:', error);
          setError(error);
          setMatches(null);
        }
      })
      .finally(() => {
        setLoading(false);
      });


    return () => {
      source.cancel('Operation canceled by the user.');
    };



  }, [])
  



  for (let m of matches) {
    if (typeof m.rarity != 'number') {
      m.rarity = rarities[m.rarity];
    }
  }





  const addimage = useCallback(() => {
    const CardsAmount = profile?.CardsAmount ?? {
      "Rare Holo": 0,
      "Rare Holo EX": 0,
      "Rare Holo GX": 0,
      "Rare Holo LV.X": 0,
      "Rare Holo Star": 0,
      "Rare Holo V": 0,
      "Rare Holo VMAX": 0,
      "Rare Holo VSTAR": 0,
      "Double Rare": 0,
      "Rare": 0,
      "ACE SPEC Rare": 0,
      "Amazing Rare": 0,
      "Radiant Rare": 0,
      "Classic Collection": 0,
      "Rare BREAK": 0,
      "Rare Prime": 0,
      "Rare Shining": 0,
      "Rare Shiny": 0,
      "Shiny Rare": 0,
      "Illustration Rare": 0,
      "Rare ACE": 0,
      "Rare Prism Star": 0,
      "Rare Ultra": 0,
      "Ultra Rare": 0,
      "LEGEND": 0,
      "Rare Shiny GX": 0,
      "Shiny Ultra Rare": 0,
      "Trainer Gallery Rare Holo": 0,
      "Special Illustration Rare": 0,
      "Rare Rainbow": 0,
      "Rare Secret": 0,
      "Hyper Rare": 0
    };
    if (!matches || matches.length === 0 || !CardsAmount) return;
    
   buttons.current.style.display = 'none';
    const RareCards = [];
    const rarity1 = matches.filter(obj => obj.rarity === 1);
    const rarity2 = matches.filter(obj => obj.rarity === 2);
    const rarity3 = matches.filter(obj => obj.rarity === 3);
    const rarity4 = matches.filter(obj => obj.rarity === 4);
    const rarity5 = matches.filter(obj => obj.rarity === 5);
    const rarity6 = matches.filter(obj => obj.rarity === 6);
    const rarity7 = matches.filter(obj => obj.rarity === 7);
    const rarity8 = matches.filter(obj => obj.rarity === 8);
    const rarity9 = matches.filter(obj => obj.rarity === 9);
    var rand;
    for (let i = 0; i < cards.current.length; i++) {
      cards.current[i].flipper.style.display = 'flex';
      cards.current[i].flipper.style.opacity = '100';

      switch (i) {
        case 9: case 8: case 7: case 6:
          rand = getRandomInt(rarity1.length);
          cards.current[i].cards.style.backgroundImage = `url(${rarity1[rand]['image']})`;
          break;
        case 5: case 4: case 3:
          rand = getRandomInt(rarity2.length);
          cards.current[i].cards.style.backgroundImage = `url(${rarity2[rand]['image']})`;
          break;
        case 2:
          if (getRandomInt(20) === 0 && rarity5?.length) {
            rand = getRandomInt(rarity5.length);
            cards.current[i].cards.style.backgroundImage = `url(${rarity5[rand]['image']})`;
            const onecard = card.filter((c) => c.id === rarity5[rand].id);
            RareCards.push(onecard[0]);
            CardsAmount["ACE SPEC Rare"]++;
          } else {
            rand = getRandomInt(rarity3.length)
            cards.current[i].cards.style.backgroundImage = `url(${rarity3[rand]['image']})`;
          }
          break;
        case 1:
          if (getRandomInt(6) === 0 && rarity6?.length) {
            rand = getRandomInt(rarity6.length);
            cards.current[i].cards.style.backgroundImage = `url(${rarity6[rand]['image']})`;
            const onecard = card.filter((c) => c.id === rarity6[rand].id);
            const cardrarity = onecard[0].rarity;
            RareCards.push(onecard[0]);
            CardsAmount[cardrarity]++;
          } else
            if (getRandomInt(20) === 0 && rarity8?.length) {

              rand = getRandomInt(rarity8.length);
              cards.current[i].cards.style.backgroundImage = `url(${rarity8[rand]['image']})`;
              const onecard = card.filter((c) => c.id === rarity8[rand].id);


              const cardrarity = onecard[0].rarity;
              RareCards.push(onecard[0]);
              CardsAmount[cardrarity]++;



            } else
              if (getRandomInt(30) === 0 && rarity9?.length) {
                rand = getRandomInt(rarity9.length);
                cards.current[i].cards.style.backgroundImage = `url(${rarity9[rand]['image']})`;
                const onecard = card.filter((c) => c.id === rarity9[rand].id);


                const cardrarity = onecard[0].rarity;
                RareCards.push(onecard[0]);
                CardsAmount[cardrarity]++;



              } else {
                rand = getRandomInt(rarity3.length)
                cards.current[i].cards.style.backgroundImage = `url(${rarity3[rand]['image']})`;
              }
          break;
        case 0:
          if (getRandomInt(3) === 0 && rarity4?.length) {

            rand = getRandomInt(rarity4.length);
            cards.current[i].cards.style.backgroundImage = `url(${rarity4[rand]['image']})`;
            const onecard = card.filter((c) => c.id === rarity4[rand].id);


            const cardrarity = onecard[0].rarity;
            RareCards.push(onecard[0]);
            CardsAmount[cardrarity]++;






          } else if (getRandomInt(10) === 0 && rarity7?.length) {

            rand = getRandomInt(rarity7.length);
            cards.current[i].cards.style.backgroundImage = `url(${rarity7[rand]['image']})`;
            const onecard = card.filter((c) => c.id === rarity7[rand].id);


            const cardrarity = onecard[0].rarity;
            RareCards.push(onecard[0]);
            CardsAmount[cardrarity]++;





          } else {
            rand = getRandomInt(rarity3.length);
            cards.current[i].cards.style.backgroundImage = `url(${rarity3[rand]['image']})`;
          }
          break;

      }


    }
    Push(CardsAmount, RareCards);
  });
  useEffect(() => {

    addimage();
  }, [matches, profile])

  return (
    <div>
      <br />
      <button className="fixed z-50 top-1 left-0 w-28 ml-1.5 p-2.5 rounded-3xl cursor-pointer text-[16px] text-white items-center justify-center flex h-[75px] bg-[#333] hover:border-[3px] duration-25 hover:border-white m-auto" onClick={() => navigate('/')}>Main Menu</button>
      <Header />

      <div className='block'>
        <Card ref={addRef(0)}/>
        <Card ref={addRef(1)}/>
        <Card ref={addRef(2)}/>
        <Card ref={addRef(3)}/>
        <Card ref={addRef(4)}/>
        <Card ref={addRef(5)}/>
        <Card ref={addRef(6)}/>
        <Card ref={addRef(7)}/>
        <Card ref={addRef(8)}/>
        <Card ref={addRef(9)}/>
      </div>
      <div className='hidden gap-x-7 text-lg' id='buttons'  ref={buttons}>
        <button onClick={() => navigate("/")} className='text-white rounded-3xl h-[75px] w-[150px] bg-[rgb(77,76,76)] hover:border-white hover:border-[3px] duration-25'>Main Menu</button>
        <button onClick={addimage} className='text-white rounded-3xl h-[75px] w-[150px] bg-[rgb(77,76,76)] hover:border-white hover:border-[3px] duration-25 '>Open Again</button>
      </div>


    </div>
  );
}
export default Open;