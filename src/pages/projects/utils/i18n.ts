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
                owner: 'Owner',
                projects : "Projects"
            },
            error:{
                create_project: "Error creating Project",
                update_project: "Error updating project",
                delete_project: "Error deleting project"
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
                owner: 'Dueño',
                projects : "Proyectos"
            },
            error:{
                create_project: "Error al crear el proyecto",
                update_project: "Error al actualizar el proyecto",
                delete_project: "Error al eliminar el proyecto"
            }
        },
    },
});

i18n.init();

export default i18n