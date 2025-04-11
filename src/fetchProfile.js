import axios from "axios";
import Cookies from 'js-cookie';


async function fetchProfile(setCards, setProfile) {
    try {
        const res = await axios.get('http://localhost:3001/users', { withCredentials: true });
        setProfile(res.data.data[0]);
        setCards(res.data.fullCards);
        console.log(res.data.data[0]);
    } catch (error) {
        if (error.response?.status === 401) {
            try {
                const refresh = await axios.post('http://localhost:3002/token', {}, { withCredentials: true });
                if (refresh.status === 200) {
                    return fetchProfile(setCards, setProfile);
                }
            } catch (profileError) {
                console.error(profileError);
            }
        } else {
            console.error(error);
        }
    }
};

export default fetchProfile;