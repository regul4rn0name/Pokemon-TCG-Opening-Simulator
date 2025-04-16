import axios from "axios";
import Cookies from 'js-cookie';


async function fetchProfile(setCards, setProfile) {
    try {
        const res = await axios.get('https://ebloauth.duckdns.org/users', { withCredentials: true });
        setProfile(res.data.data[0]);
        setCards(res.data.fullCards);
        console.log(res.data.data[0]);
    } catch (error) {
        if (error.response?.status === 401) {
            try {
                const refresh = await axios.post('https://ebloauth.duckdns.org/auth/token', {}, { withCredentials: true });
                if (refresh.status === 200) {
                    return fetchProfile(setCards, setProfile);
                }
            } catch (profileError) {
                setProfile(null);
                console.error(profileError);
            }
        } else {
            console.error(error);
        }
    }
};

export default fetchProfile;