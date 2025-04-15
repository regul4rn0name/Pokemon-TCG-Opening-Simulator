import axios from "axios";

async function Push(CardsAmount){
    try {
        const res = await axios.post('http://localhost:3001/updatecards',{CardsAmount},{withCredentials:true});
        console.log(res);
        
    } catch (error) {
        console.error(error);
        
    }
    
}

export default Push;