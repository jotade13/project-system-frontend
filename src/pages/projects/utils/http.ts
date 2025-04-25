import { getAuthToken } from "../../../util/auth";
import { dataNewProject } from "./interfaces";

const url = "http://127.0.0.1:8000/api/"
export async function getProjects(token:string|null)  {
  try {
    if (!token) throw new Error("No token provided");

    const response = await fetch(url + "projects", {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      throw new Error(errorData?.message || 'Failed to fetch projects');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in getProjects:", error);
    throw error; 
  }
}
export async function newProject(dataNewProject:dataNewProject) {
    const token = getAuthToken()

    try{
        const response = await fetch(url+"projects",{
            method: 'POST',
            body: JSON.stringify(dataNewProject.data),
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
    }catch (error) {
        console.error("Error in PostProjects:", error);
        throw error; 
    }
}
export async function deleteProject(id:string)  {
    const token = getAuthToken()
    try {
        const response = await fetch(url+"projects/"+id,{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
        });

        if (!response.ok) {
            const error = new Error('An error occurred deleting project');
            throw error;
        }
        const data = await response.json();
        console.log(data)
        return data; 
    }
    catch (error) {
        console.error("Error in deleteProject:", error);
        throw error; 
    } 
}