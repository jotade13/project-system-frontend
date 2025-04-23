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
    console.log(data);
    return data; // No olvides retornar los datos
  } catch (error) {
    console.error("Error in getProjects:", error);
    throw error; // Re-lanza el error para manejarlo donde se llame a la función
  }
}