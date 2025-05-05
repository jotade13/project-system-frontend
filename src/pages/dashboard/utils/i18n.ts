import { createInstance } from 'i18next';

const i18n = createInstance({
  lng: 'en',
  fallbackLng: 'es',
  debug: true,

  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },

  resources: {
    en: {
      translation: {
        loading: 'Loading',
        dashboard: 'Dashboard'
      },
    },
    es: {
      translation: {
        loading: 'Cargando',
        dashboard: 'Panel'
      },
    },
  },
});

i18n.init();

export default i18n