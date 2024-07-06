import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// import Backend from 'i18next-http-backend';
// // don't want to use this?
// // have a look at the Quick start guide 
// // for passing in lng and translations on init

i18n
    .use(initReactI18next) //we pass the i18n instance to react-i18next which will make it available for all the components.
    
    // .use(Backend)
    
    .use(LanguageDetector) // Detect user language
    // // learn more: https://github.com/i18next/i18next-browser-languageDetector

    //init i18next
    .init({ 
        // lng: document.querySelector('html').lang, //Added to identify the html language.
        fallbackLng: 'en',
        debug: true,

        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        }
    });


export default i18n;