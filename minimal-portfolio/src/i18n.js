import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// import Backend from 'i18next-http-backend';
// // don't want to use this?
// // have a look at the Quick start guide 
// // for passing in lng and translations on init

i18n
    .use(initReactI18next) //we pass the i18n instance to react-i18next which will make it available for all the components.
    .use(LanguageDetector) // Detect user language
    // .use(Backend) //Allows the use of locales directory with all the needed translations.
    
    //init i18next
    .init({ 
        // lng: document.querySelector('html').lang, //Identifies the html language. NOt needed when using LanguageDetector
        fallbackLng: 'en', //In case there is no translation available.
        debug: true, //For debugging purposes.
        // detection: {
        //     order: ['navigator', 'cookie', 'localStorage', 'sessionStorage', 'path', 'subdomain'],
        // }
    });


export default i18n;