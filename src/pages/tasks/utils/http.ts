import { QueryClient} from "@tanstack/react-query";
import {formSchemaTaskType } from "./validations";
import { getAuthToken } from "../../../util/auth";

export const queryClient = new QueryClient();
const url = "http://127.0.0.1:8000/api/"

export interface dataTask {
    data : formSchemaTaskType
}
export interface UpdateTask {
    dataTask: formSchemaTaskType,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    id:any
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

export async function newTask(dataTask:dataTask) {
    const token = getAuthToken()

    try{
        const response = await fetch(url+"tasks",{
            method: 'POST',
            body: JSON.stringify(dataTask.data),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
            });
        
            if (!response.ok) {
                const error = new Error('An error occurred while ');
                throw error;
            }
            const data = await response.json();
            return data;
    }catch (error) {
        console.error("Error in PostTasks:", error);
        throw error; 
    }
    
}
export async function getTasks()  {
    const token = getAuthToken()
    try {
        const response = await fetch(url+"tasks",{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
        });

        if (!response.ok) {
            const error = new Error('An error occurred while fetching Tasks');
            throw error;
        }
        const data = await response.json();
        return data; 
    }
    catch (error) {
        console.error("Error in getTask:", error);
        throw error; 
    } 
}
export async function getUsers(token:string|null)  {

    try {
        const response = await fetch(url + "users",{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
        });
        if (!response.ok) {
            const errorData = await response.json().catch(() => null);
            throw new Error(errorData?.message || 'Failed to fetch users');
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error("Error in getUsers:", error);
        throw error; 
    }

}
export async function deleteTask(id:string)  {
    const token = getAuthToken()
    try {
        const response = await fetch(url+"tasks/"+id,{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
        });

        if (!response.ok) {
            const error = new Error('An error occurred deleting Task');
            throw error;
        }
        const data = await response.json();
        return data; 
    }
    catch (error) {
        console.error("Error in deletTask:", error);
        throw error; 
    } 
}
export async function showTask(id:string)  {
    const token = getAuthToken()
    try {
        const response = await fetch(url+"tasks/"+id,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
        });

        if (!response.ok) {
            const error = new Error('An error occurred deleting Task');
            throw error;
        }
        const data = await response.json();
        return data; 
    }
    catch (error) {
        console.error("Error in deletTask:", error);
        throw error; 
    } 
}
export async function updateTask({dataTask,id}:UpdateTask)  {
    const token = getAuthToken()
    try {
        const response = await fetch(url+"tasks/"+id,{
        method: 'PUT',
        body: JSON.stringify(dataTask),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
        });

        if (!response.ok) {
            const error = new Error('An error occurred updating Task');
            throw error;
        }
        const data = await response.json();
        return data; 
    }
    catch (error) {
        console.error("Error in updateTask:", error);
        throw error; 
    } 
}