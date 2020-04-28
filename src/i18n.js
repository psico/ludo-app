import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
    en: {
        translation: {
            "Welcome to React": "Welcome to React and react-i18next",
            "login": "Login",
            "community": "Community",
            "dashboard": "Dashboard",
            "my-profile": "My Profile",
            "friends": "Friends",
            "game": "Game",
            "players": "Players",
            "match": "Match",
            "add-match": "Add Match",
            "play-match": "Play Match",
            "search-match-game": "Search match game",
            "search-match-players": "Search match players",
            "game-rules-manual": "Game rules manual"
        }
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "en",

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;
