import { getAuthToken } from "../../../util/auth";
import { dataUser, UpdateUserProps } from "./interfaces";
const url = "http://127.0.0.1:8000/api/"



export async function getTasksMetrics()  {
    const token = getAuthToken()
    try {
        const response = await fetch(url+"dashboard/tasks/metrics",{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
        });

        if (!response.ok) {
            const error = new Error('An error occurred');
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
export async function getProjectMetrics()  {
    const token = getAuthToken()
    try {
        const response = await fetch(url+"dashboard/projects/metrics",{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
        });

        if (!response.ok) {
            const error = new Error('An error occurred');
            throw error;
        }
        const data = await response.json();
        return data; 
    }
    catch (error) {
        console.error("Error in getProjectMetrics:", error);
        throw error; 
    } 
}
export async function getUsersMetrics()  {
    const token = getAuthToken()
    try {
        const response = await fetch(url+"dashboard/users/metrics",{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
        });

        if (!response.ok) {
            const error = new Error('An error occurred ');
            throw error;
        }
        const data = await response.json();
        return data; 
    }
    catch (error) {
        console.error("Error in getUsersMetrics:", error);
        throw error; 
    } 
}

export async function createUser(dataUser:dataUser) {

    try {
        const token = getAuthToken()
        const response = await fetch(url+"register",{
        method: 'POST',
        body: JSON.stringify(dataUser.data),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
        });

        if (!response.ok) {
            const error = new Error('An error occurred while logging in this page');
            throw error;
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error("Error in getUsersMetrics:", error);
        throw error; 
    } 
}

export async function updateUser({dataUser,id}:UpdateUserProps) {
    try{
        console.log(dataUser)
        const token = getAuthToken()
        const response = await fetch(url+"users/"+id,{
        method: 'PUT',
        body: JSON.stringify(dataUser),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
        });
        if (!response.ok) {
            const error = new Error('An error occurred');
            throw error;
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error("Error in UpdateUser:", error);
        throw error; 
    } 
}
export async function deleteUser(id:string) {
    try{
        const token = getAuthToken()

        const response = await fetch(url+"users/"+id,{
        method: 'DELETE',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
        }
        });

        if (!response.ok) {
            const error = new Error('An error occurred');
            throw error;
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error("Error in deletUser:", error);
        throw error; 
    } 
}