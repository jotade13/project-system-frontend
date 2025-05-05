import { createInstance } from 'i18next';

const i18n = createInstance({
  lng: 'en',
  fallbackLng: 'es',

  interpolation: {
    escapeValue: false, 
  },

    resources: {
        en: {
            translation: {
                create_project: "Create Project",
                new_project: "New Project",
                label: {
                    name:"Name",
                    description:"Description",
                    status : "Status",
                    add_users : "Add Users"
                },
                placeholder:{
                    name:"Name",
                    description:"Description",
                    status : "Select Status",
                    add_users : "Select Users"
                },
                name: 'Name',
                description: 'Description',
                owner: 'Owner'
            }
        },
        es: {
            translation: {
                create_project: "Crear Proyecto",
                new_project: "Nuevo Proyecto",
                label: {
                    name:"Nombre",
                    description:"Descripción",
                    status : "Estado",
                    add_users : "Agregar Usuarios"
                },
                placeholder:{
                    name:"Nombre",
                    description:"Descripción",
                    status : "Seleccione un Estado",
                    add_users : "Seleccione los Usuarios"
                },
                name: 'Nombre',
                description: 'Descripción',
                owner: 'Owner'
            },
        },
    },
});

i18n.init();

export default i18n