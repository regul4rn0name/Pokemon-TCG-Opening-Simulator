import axios from "axios";
import Cookies from 'js-cookie';

const fallbackData = {
    data: [
        {
            _id: "680021ceb867b00e33523206",
            id: "108187375686964550838",
            name: "Savelii",
            CardsAmount: {
                "Rare Holo": 0,
                "Rare Holo EX": 0,
                "Rare Holo GX": 0,
                "Rare Holo LV.X": 0,
                "Rare Holo Star": 0,
                "Rare Holo V": 0,
                "Rare Holo VMAX": 0,
                "Rare Holo VSTAR": 0,
                "Double Rare": 0,
                "Rare": 1,
                "ACE SPEC Rare": 0,
                "Amazing Rare": 0,
                "Radiant Rare": 0,
                "Classic Collection": 0,
                "Rare BREAK": 0,
                "Rare Prime": 0,
                "Rare Shining": 0,
                "Rare Shiny": 0,
                "Shiny Rare": 0,
                "Illustration Rare": 1,
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
            }
        }
    ],
    fullCards: [
        {
            _id: "67e6fe2169d99578c5491f28",
            id: "swsh9-10",
            name: "Wormadam",
            image: "https://images.pokemontcg.io/swsh9/10.png",
            rarity: "Rare"
        },
        // [...other cards omitted for brevity, keep them as-is in actual code]
        {
            _id: "67e6fe9e69d99578c5492fac",
            id: "sv9-190",
            name: "Spiky Energy",
            image: "https://images.pokemontcg.io/sv9/190.png",
            rarity: "Hyper Rare"
        }
    ]
};

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
