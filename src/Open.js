import './Open.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
var clickedcount = 0;
function Clicked(event) {
  clickedcount++
 
  
  if (clickedcount % 2 !== 0) {
    event.currentTarget.style.transform = 'rotateY(180deg)';

  }
  if (clickedcount % 2 === 0) {
    event.currentTarget.style.transition = 'transform 0.5s, opacity 0.5s';
    event.currentTarget.style.transform = 'translate(200px, -100px) rotate(15deg)';
    event.currentTarget.style.opacity = '0';
    let lastevent = event.currentTarget;
    setTimeout(() => {
      lastevent.style.display = 'none';
      lastevent.style.transform = 'rotateY(360deg)';
    }, 450);
    if(document.getElementsByClassName("flipper")[1].style.display=='none'){
      document.getElementById('buttons').style.display='flex';
    }
  }
 


}



function Open() {
  const navigate = useNavigate();
  clickedcount = 0;
 
  var divs = document.getElementsByTagName("div");
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  var cardsimg = [];
  const location = useLocation();
  const table = location.state?.table
  useEffect(() => {
    setLoading(true);
    setError(null);
    const source = axios.CancelToken.source();
    axios.get(`https://cardsbackend.onrender.com/${table}`, { cancelToken: source.token }).then(response => {
    
        if (response.data ) {
          setMatches(response.data)
          
          
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

  var rarity1=[];
  var rarity2=[];
  var rarity3=[];
  var rarity4=[];
  var rarity5=[];
  var rarity6=[];
  var rarity7=[];
  var rarity8=[];
  var rarity9=[];
  var cards=document.getElementsByClassName("back");
  if(matches){
    
   
    for (let index = 0; index < matches.length; index++) {
      
      
      switch (matches[index]['rarity']){
        case 'Promo':
        case 'Unknown':
        case 'Common':
          rarity1.push(matches[index]['card_img']);
          break;
        case 'Uncommon':
          rarity2.push(matches[index]['card_img']);
          break;
        case 'Rare Holo':
        case 'Rare Holo EX':
        case 'Rare Holo GX':
        case 'Rare Holo LV.X':
        case 'Rare Holo Star':
        case 'Rare Holo V':
        case 'Rare Holo VMAX':
        case 'Rare Holo VSTAR':
        case 'Double Rare':
          rarity4.push(matches[index]['card_img']);
          break;
        case 'Rare':
          rarity3.push(matches[index]['card_img']);
          break;
        case 'ACE SPEC Rare':
          rarity5.push(matches[index]['card_img']);
          break;
        case 'Amazing Rare':
        case 'Radiant Rare':
        case 'Classic Collection':
        case 'Rare BREAK':
        case 'Rare Prime':
        case 'Rare Shining':
        case 'Rare Shiny':
        case 'Shiny Rare':
        case 'Illustration Rare':
          rarity6.push(matches[index]['card_img']);
          break;
        case 'Rare ACE':
        case 'Rare Prism Star':
        case 'Rare Ultra':
        case 'Ultra Rare':
          rarity7.push(matches[index]['card_img']);
          break;
        case 'LEGEND':
        case 'Rare Shiny GX':
        case 'Shiny Ultra Rare':
        case 'Trainer Gallery Rare Holo':
        case 'Special Illustration Rare':
          rarity8.push(matches[index]['card_img']);
          break;
        case 'Rare Rainbow':
        case 'Rare Secret':
        case 'Hyper Rare':
          rarity9.push(matches[index]['card_img']);
          break;
          
      }
      
    
    
     
      
      
      
      
    }
   
   
  }
  
  const addimage=()=>{
    var rand;
    var flipper=document.getElementsByClassName("flipper");
    for(let i =0;i<cards.length;i++){
      flipper[i].style.display='flex';
      flipper[i].style.opacity='100';
      document.getElementById('buttons').style.display='none';
      
     switch(i){
      case 9:
        rand = getRandomInt(rarity1.length);
        cards[i].style.backgroundImage = `url(${rarity1[rand]})`;
        break;        
      case 8:
        rand = getRandomInt(rarity1.length);
        cards[i].style.backgroundImage = `url(${rarity1[rand]})`;
        break; 
      case 7:
        rand = getRandomInt(rarity1.length);
        cards[i].style.backgroundImage = `url(${rarity1[rand]})`;
        break; 
      case 6:
        rand = getRandomInt(rarity1.length);
        cards[i].style.backgroundImage = `url(${rarity1[rand]})`;
        break; 
      case 5:
        rand = getRandomInt(rarity2.length);
        cards[i].style.backgroundImage = `url(${rarity2[rand]})`;
        break; 
      case 4:
        rand = getRandomInt(rarity2.length);
        cards[i].style.backgroundImage = `url(${rarity2[rand]})`;
        break; 
      case 3:
        rand = getRandomInt(rarity2.length);
        cards[i].style.backgroundImage = `url(${rarity2[rand]})`;
        break; 
      case 2:
        rand = getRandomInt(rarity2.length);
        cards[i].style.backgroundImage = `url(${rarity2[rand]})`;
       if(getRandomInt(20)===0){
        if(rarity5.length===0){
          rand = getRandomInt(rarity3.length)
          cards[i].style.backgroundImage = `url(${rarity3[rand]})`;
        }else{
          rand = getRandomInt(rarity5.length);
          cards[i].style.backgroundImage = `url(${rarity5[rand]})`;
        }
          
        }
        break; 
      case 1:
          rand = getRandomInt(rarity2.length);
          cards[i].style.backgroundImage = `url(${rarity2[rand]})`;
        if(getRandomInt(6)===0){
          if(rarity6.length===0){
            rand = getRandomInt(rarity1.length)
            cards[i].style.backgroundImage = `url(${rarity1[rand]})`;
          }else{
            rand = getRandomInt(rarity6.length);
          cards[i].style.backgroundImage = `url(${rarity6[rand]})`;
          }
          
        }
        if(getRandomInt(20)===0){
          if(rarity8.length===0){
            rand = getRandomInt(rarity1.length)
            cards[i].style.backgroundImage = `url(${rarity1[rand]})`;
          }else{
            rand = getRandomInt(rarity8.length);
          cards[i].style.backgroundImage = `url(${rarity8[rand]})`;
          }
          
        }
        if(getRandomInt(30)===0){
          if(rarity9.length===0){
            rand = getRandomInt(rarity1.length)
            cards[i].style.backgroundImage = `url(${rarity1[rand]})`;
          }else{
            rand = getRandomInt(rarity9.length);
          cards[i].style.backgroundImage = `url(${rarity9[rand]})`;
          }
          
        }
        break;       
      case 0:
        rand = getRandomInt(rarity3.length);
        cards[i].style.backgroundImage = `url(${rarity3[rand]})`;
        if(getRandomInt(3)===0){
          rand = getRandomInt(rarity4.length);
          cards[i].style.backgroundImage = `url(${rarity4[rand]})`;
        }
        if(getRandomInt(10)===0){
          rand = getRandomInt(rarity7.length);
          cards[i].style.backgroundImage = `url(${rarity7[rand]})`;
          
          
        }
        break; 
        
     }
    }
  }
  addimage();
  return (
    <body>
      <div className='block'>
      <div className='flip-container' >
        <div className='flipper' onClick={Clicked}>
          <div className='front'>

          </div>
          <div className='back'>

          </div>

        </div>

      </div>
      <div className='flip-container' >
        <div className='flipper' onClick={Clicked}>
          <div className='front'>

          </div>
          <div className='back'>

          </div>

        </div>

      </div>
      <div className='flip-container' >
        <div className='flipper' onClick={Clicked}>
          <div className='front'>

          </div>
          <div className='back'>

          </div>

        </div>

      </div>
      <div className='flip-container' >
        <div className='flipper' onClick={Clicked}>
          <div className='front'>

          </div>
          <div className='back'>

          </div>

        </div>

      </div>
      <div className='flip-container' >
        <div className='flipper' onClick={Clicked}>
          <div className='front'>

          </div>
          <div className='back'>

          </div>

        </div>

      </div>
      <div className='flip-container' >
        <div className='flipper' onClick={Clicked}>
          <div className='front'>

          </div>
          <div className='back'>

          </div>

        </div>

      </div>
      <div className='flip-container' >
        <div className='flipper' onClick={Clicked}>
          <div className='front'>

          </div>
          <div className='back'>

          </div>

        </div>

      </div>
      <div className='flip-container' >
        <div className='flipper' onClick={Clicked}>
          <div className='front'>

          </div>
          <div className='back'>

          </div>

        </div>

      </div>
      <div className='flip-container' >
        <div className='flipper' onClick={Clicked}>
          <div className='front'>

          </div>
          <div className='back'>

          </div>

        </div>

      </div>
      <div className='flip-container' >
        <div className='flipper' onClick={Clicked}>
          <div className='front'>

          </div>
          <div className='back'>

          </div>

        </div>

      </div>
      </div>
      <div className='block' id='buttons'>
         <button onClick={()=>  navigate("/")}  className='penis'>Main Menu</button>
         <button onClick={addimage}  className='penis' id='again' >Open Again</button>
      </div>
    

    </body>
  );
}

export default Open;