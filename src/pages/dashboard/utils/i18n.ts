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
        title: "Dashboard",
        create_user: "Create User",
        new_user: "New User",
        register:
        {
          label: {
            email: "Email",
            password: "Password",
            first_name:"First Name",
            last_name:"Last Name",
            password_confirmation: "Password Confirmation"
          },
          placeholder: { 
              email: "email@email.com",
              password: "Password",
              first_name:"First Name",
              last_name:"Last Name",
              password_confirmation: "Password"
          },
        },
        projects_metrics: "Total projects",
        user_metrics: "Total users",
        task_metrics: "Total tasks",
        edit: "Edit",
        delete: "Delete",
        edit_user: "Edit user",
        first_name: "First Name",
        last_name: "Last Name",
        email: "Email",
        role: "Role",
        select_role: "Select Role",
        admin: "Admin",
        user: "User",
        supervisor: "Supervisor",
        users: "Users",
        error:{
          create_user: "Error creating user",
          update_user: "Error updating user",
          delete_user: "Error deleting user"
        }
      }
    },
    es: {
      translation: {
        title: "Panel",
        create_user: "Crear Usuario",
        new_user: "Nuevo Usuario",
        register: {
          title: "Registrar",
          description : "Puedes registrarte aquí",
          label: {
              email: "Correo",
              password: "Contraseña",
              first_name:"Nombre",
              last_name:"Apellido",
              password_confirmation: "Confirmar contraseña"
          },
          placeholder: { 
              email: "correo@corre.com",
              password: "Contraseña",
              first_name:"Nombre",
              last_name:"Apellido",
              password_confirmation: "Contraseña"
          },
        },
        projects_metrics: "Total proyectos",
        user_metrics: "Total Usuarios",
        task_metrics: "Total Tareas",
        edit: "Editar",
        delete: "Eliminar",
        edit_user: "Editar Usuario",
        first_name: "Nombre",
        last_name: "Apellido",
        email: "Correo",
        role: "Rol",
        select_role: "Seleccionar Rol",
        admin: "Administrador",
        user: "Usuario",
        supervisor: "Supervisor",
        users: "Usuarios",
        error:{
          create_user: "Error al crear el usuario",
          update_user: "Error al actualizar el usuario",
          delete_user: "Error al eliminar el usuario"
        }
      },
    },
  },
});

i18n.init();

export default i18n