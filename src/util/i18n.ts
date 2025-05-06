import { createInstance } from 'i18next';

const i18n = createInstance({
  lng: 'es',
  fallbackLng: 'es',

  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },

    resources: {
        en: {
            translation: {
                "header":{
                    "title": "Project and Task Management System",
                    "button": "Logout",
                    "dashboard":"Dashboard",
                    "tasks": "Tasks",
                    "projects": "Projects"
                },
                "language":
                {
                    "spanish":"Spanish",
                    "english":"English"
                },
                "theme":
                {
                    "light":"Light",
                    "dark":"Dark",
                    "system":"System"
                },
            }
        },
        es: {
        translation: {
                "header":{
                    "title": "Sistema de Gestion de proyectos y tareas",
                    "button": "Salir",
                    "dashboard":"Panel",
                    "tasks": "Tareas",
                    "projects": "Proyectos"
                },
                "language":{
                    "spanish":"Español",
                    "english":"Inglés"
                },
                "theme":{
                    "light":"Claro",
                    "dark":"Oscuro",
                    "system":"Sistema"
                },
            },
        },
    },
});

i18n.init();

export default i18n