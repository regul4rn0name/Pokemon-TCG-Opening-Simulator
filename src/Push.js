import axios from "axios";

async function Push(CardsAmount,RareCards){

    try {
        const res = await axios.post('https://pokemon-tcg-opening-simulator.jajca.site/server/updatecards',{CardsAmount,RareCards},{withCredentials:true});
        console.log(CardsAmount);
        console.log(RareCards);
        
        
        
        console.log(res);
        
    } catch (error) {
        console.error(error);
        
    }
    
}

export default Push;