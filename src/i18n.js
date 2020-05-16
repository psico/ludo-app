import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
    en: {
        translation: {
            //One word
            "community": "Community",
            "dashboard": "Dashboard",
            "friends": "Friends",
            "game": "Game",
            "join": "Join",
            "login": "Login",
            "my-profile": "My Profile",
            "match": "Match",
            "players": "Players",
            "schedule": "Schedule",
            "save": "Save",

            //Two words
            "add-match": "Add match",
            "email-login": "E-mail login",
            "play-match": "Play match",
            "play-now": "Play now",

            //Three words
            "game-rules-manual": "Game rules manual",
            "register-match": "Register match",
            "search-match-game": "Search match game",
            "search-match-players": "Search match players",

            //Many words
            "the-host-cannot-be-changed": "The host cannot be changed",
            "register-a-new-game": "Register a new game"
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
