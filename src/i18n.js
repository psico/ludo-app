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
            "email": "E-Mail",
            "friends": "Friends",
            "game": "Game",
            "join": "Join",
            "login": "Login",
            "match": "Match",
            "password": "Password",
            "players": "Players",
            "save": "Save",
            "schedule": "Schedule",
            "search...": "Search...",

            //Two words
            "add-match": "Add match",
            "create-login": "Create login",
            "email-login": "E-mail login",
            "friends-list": "Friends list",
            "logo-ludoapp": "Logo LudoApp",
            "my-profile": "My Profile",
            "play-match": "Play match",
            "play-now": "Play now",
            "user-level": "User level",


            //Three words
            "choose-the-players": "Choose the players",
            "game-rules-manual": "Game rules manual",
            "login-with-facebook": "Login With Facebook",
            "login-with-google": "Login With Google",
            "login-with-twitter": "Login With Twitter",
            "register-match": "Register match",
            "search-match-game": "Search match game",
            "search-match-players": "Search match players",
            "successfully-registered-match": "Successfully registered match",
            "write-a-comment": "Write a comment",


            //Many words
            "the-host-cannot-be-changed": "The host cannot be changed",
            "register-a-new-game": "Register a new game",
            "fill-in-the-required-fields": "Fill in the required fields"
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
