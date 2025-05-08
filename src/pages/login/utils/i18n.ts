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
                "login": {
                "title": "Login",
                "description" : "You can log in here",
                    "label": {
                        "email": "Email",
                        "password": "Password",
                        "first_name":"Name",
                        "Last_name":"Last Name",
                        "password_confirmation": "Confirm password"
                    },
                    "placeholder": { 
                        "email": "email@email.com",
                        "password": "Password",
                        "first_name":"Name",
                        "Last_name":"Last Name",
                        "password_confirmation": "Password"
                    },
                    "error-auth": "Authentication Error"
                },
            }
        },
        es: {
            translation: {
                "login": {
                    "title": "Iniciar Sesión",
                    "description" : "Puedes ingresar aquí",
                    "label": {
                        "email": "Correo",
                        "password": "Contraseña"
                    },
                    "placeholder": { 
                        "email": "correo@corre.com",
                        "password": "Contraseña"
                    },
                "error-auth": "Error en la Autenticación",
                },
            },
        },
    },
});

i18n.init();

export default i18n