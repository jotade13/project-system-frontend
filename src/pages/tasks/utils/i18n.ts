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
                create_task: "Create Task",
                new_task: "New Task",
                label: {
                    title:"Title",
                    description:"Description",
                    project: "Project",
                    user: "User",
                    status : "Status",
                    priority: "Priority"
                },
                placeholder:{
                    title:"Title",
                    description:"Description",
                    project: "Select Project",
                    user: "Select User",
                    status : "Select Status",
                    priority: "Select Priority"
                },
                pending: "Pending",
                in_progress: "In progress",
                completed: "Completed",
                low: "Low",
                medium: "Medium",
                high: "High",
            },
        },
        es: {
        translation: {
                create_task:"Crear Tarea",
                new_task: "Nueva Tarea",
                label: {
                    title:"Titulo",
                    description:"Descripción",
                    project: "Proyecto",
                    user: "Usuario",
                    status : "Estado",
                    priority: "Prioridad"
                },
                placeholder:{
                    title:"Titulo",
                    description:"Descripción",
                    project: "Seleccione un Proyecto",
                    user: "Seleccione un Usuario",
                    status : "Seleccione un Estado",
                    priority: "Seleccione una prioridad"
                },
                pending: "Pendiente",
                in_progress: "En progreso",
                completed: "Completado",
                low: "Baja",
                medium: "Media",
                high: "Alta"
            },
            projects : "Proyectos",
            users: "Usuarios"
        },
    },
});

i18n.init();

export default i18n