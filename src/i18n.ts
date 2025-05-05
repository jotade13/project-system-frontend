import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { i18n as i18dashboard } from './pages/dashboard/components/Dashboard';
import { i18n as i18task } from "./pages/tasks/component/Tasks";
import { i18n as i18project } from "./pages/projects/components/Projects"




i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    lng: 'es',
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });
  
  i18n.on('languageChanged', (lng) => {
    i18dashboard.changeLanguage(lng);
    i18task.changeLanguage(lng)
    i18project.changeLanguage(lng)
  });

  export default i18n;