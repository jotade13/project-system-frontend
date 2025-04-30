import { getAuthToken } from "../../../util/auth";
import { dataUser } from "./interfaces";
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
    const response = await fetch(url+"register",{
    method: 'POST',
    body: JSON.stringify(dataUser.data),
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
    const role = data.role;
    localStorage.setItem('token',token)
    localStorage.setItem('role',role)
    }
    catch (error) {
        console.error("Error in getUsersMetrics:", error);
        throw error; 
    } 
}

export async function updateUser(dataUser:dataUser,id:string) {
    
    try{
    const response = await fetch(url+"user/"+id,{
    method: 'PUT',
    body: JSON.stringify(dataUser.data),
    headers: {
      'Content-Type': 'application/json',

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
        console.error("Error in getUsersMetrics:", error);
        throw error; 
    } 
}
export async function deleteUser(id:string) {
    try{
    const token = getAuthToken()

    const response = await fetch(url+"user/"+id,{
    method: 'DELETE',
    body: JSON.stringify(id),
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
        console.error("Error in getUsersMetrics:", error);
        throw error; 
    } 
}