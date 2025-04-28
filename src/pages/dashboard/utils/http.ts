import { getAuthToken } from "../../../util/auth";
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