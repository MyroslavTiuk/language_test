import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { NativeModules } from 'react-native';
import * as RNLocalize from 'react-native-localize';

const resources = {
    en: { translation: { greeting: "Hello" } },
    fr: { translation: { greeting: "Bonjour" } },
    it: { translation: { greeting: "Ciao" } },
    uk: { translation: { greeting: "Привіт" } },
    //...
};

const languageDetector = {
    type: 'languageDetector',
    async: true,
    detect: () => {
        const supportedLanguages = ['en', 'fr', 'it', 'de'];
        const locale = Platform.OS === 'ios' ? (
            NativeModules.SettingsManager?.settings?.AppleLocale
            || NativeModules.SettingsManager?.settings?.AppleLanguages[0]
            || ''
        ) : (
            NativeModules.I18nManager?.localeIdentifier || ''
        );

        const [lowerCaseLocale] = locale.split('_');

        if (supportedLanguages.includes(lowerCaseLocale)) {
            return lowerCaseLocale;
        }
        console.warn(`locale ${lowerCaseLocale} from ${locale} is not supported, defaulting to ${defaultLang}`);
        return 'en';
    },
    init: () => { },
    cacheUserLanguage: () => { },
};

i18n
    .use(languageDetector)
    .use(initReactI18next)
    .init({
        resources,
        compatibilityJSON: 'v3',
        lng: "en", 
        fallbackLng: { 
            'en-AU': ['en'], 'fr-CA': ['fr'], 'uk-UA': ['uk'], 'default': ['en']
        },
        debug: true,
        interpolation: {
            escapeValue: false, 
        },
        react: {
            useSuspense: false,
        },
    });



export default i18n;
