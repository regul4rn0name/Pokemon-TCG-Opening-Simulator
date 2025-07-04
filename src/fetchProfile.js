import axios from "axios";
import Cookies from 'js-cookie';


async function fetchProfile(setCards, setProfile) {
    try {
        const res = await axios.get('https://pokemon-tcg-opening-simulator.jajca.site/server/users', {
            withCredentials: true
        });
        setProfile(res.data.data[0]);
        setCards(res.data.fullCards);
        console.log(res.data.data[0]);
    } catch (error) {
        if (error.response?.status === 401) {
            try {
                const refresh = await axios.post(
                    'https://pokemon-tcg-opening-simulator.jajca.site/server/auth/token',
                    {},
                    { withCredentials: true }
                );
                if (refresh.status === 200) {
                    return fetchProfile(setCards, setProfile);
                }
            } catch (profileError) {
                setProfile(null);
                console.error("Token refresh failed:", profileError);
            }
        } else {
            console.error("Fetch failed, using fallback data:", error);
            // Fallback
            setProfile(fallbackData.data[0]);
            setCards(fallbackData.fullCards);
        }
    }
}

export default fetchProfile;
