import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend'; // for passing in lng and translations on init.



i18n
    .use(initReactI18next) //we pass the i18n instance to react-i18next which will make it available for all the components.
    .use(LanguageDetector) // Detect user language
    .use(HttpApi) //Allows the use of locales directory with all the needed translations.
    
    //init i18next
    .init({ 
        supportedLngs: ['en', 'es', 'de', 'fr'],
        fallbackLng: 'en', //In case there is no translation available.
        debug: true, //For debugging purposes.
        detection: {
            order: ['localStorage', 'cookie', 'navigator', 'sessionStorage', 'path', 'subdomain'],
        },
        backend: {
            loadPath: '/assets/locales/{{lng}}/translation.json',
        },

        // load: 'languageOnly',
    });


export default i18n;