import './i18n'; 
import React from 'react';
import { useTranslation } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';
import { AppNavigator } from './src/navigation/AppNavigator';
import { setLanguage } from './src/modules/user/actions';
import { store } from './src/store';
import { langList } from './src/constants/mockLanguageList';
import { useAppSelector } from './src/store/hooks';

const App = () => {
  const { t, i18n } = useTranslation();

  // We can use this value from redux to prevent change language by phone settings in feature
  const { code, lang } = useAppSelector((state) => state.user.language);


  const getBestAvailableLanguage = () => {
    const locales = RNLocalize.getLocales();
    const languageTags = locales.map(locale => locale.languageCode);
    const supportedLanguages = ['en', 'fr', 'uk', 'it']; // example of supported languages
    const bestAvailableLanguage = languageTags.find(tag => supportedLanguages.includes(tag)) || 'en';
    const selectedLang = langList.find(el => el.code === bestAvailableLanguage)
    store.dispatch(setLanguage({ lang: selectedLang?.title, code: selectedLang?.code, isAuto: true }));

    // Default to English
    return bestAvailableLanguage;
  };

  React.useEffect(() => {
    i18n.changeLanguage(getBestAvailableLanguage());
  }, [])


  return (
      <AppNavigator />
  );
};

export default App;