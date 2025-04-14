import { QueryClient} from "@tanstack/react-query";

export const queryClient = new QueryClient();
const url = "http://127.0.0.1:8000/api/"

type dataLogin = {
    data : {
        email: string,
        password: string
    }
  
}
type dataRegister = {
    data : {
        first_name:string,
        last_name:string,
        email: string,
        password: string,
        password_confirmation:string  
    }
}

export async function login(dataLogin:dataLogin) {

    const response = await fetch(url+"login",{
    method: 'POST',
    body: JSON.stringify(dataLogin.data),
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
