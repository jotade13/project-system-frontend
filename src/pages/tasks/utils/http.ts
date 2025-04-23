import { QueryClient} from "@tanstack/react-query";
import {formSchemaTaskType } from "./validations";

export const queryClient = new QueryClient();
const url = "http://127.0.0.1:8000/api/"

interface dataNewTask {
    data : formSchemaTaskType
}
/*type dataUpdateTask = {
    data : {
        first_name:string,
        last_name:string,
        email: string,
        password: string,
        password_confirmation:string  
    }
}*/

export async function newTask(dataNewTask:dataNewTask) {

    const response = await fetch(url+"tasks",{
    method: 'POST',
    body: JSON.stringify(dataNewTask.data),
    headers: {
      'Content-Type': 'application/json'
    }
    });

    if (!response.ok) {
        const error = new Error('An error occurred while logging in this page');
        throw error;
    }

    const data = await response.json();
    console.log(data)
}
export async function getTasks(token:string|null)  {

    const response = await fetch(url+"tasks",{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'bearer-token': `Bearer ${token}`
    }
    });

    if (!response.ok) {
        const error = new Error('An error occurred while fetching Tasks');
        throw error;
    }

    const data = await response.json();
    console.log(data)
}
/*
export async function register(dataRegister:dataRegister) {

    const response = await fetch(url+"register",{
    method: 'POST',
    body: JSON.stringify(dataRegister.data),
    headers: {
      'Content-Type': 'application/json'
    }
    });

    if (!response.ok) {
        const error = new Error('An error occurred while logging in this page');
        throw error;
    }
    const data = await response.json();
    const token = data.token;
    localStorage.setItem('token',token)
}
*/