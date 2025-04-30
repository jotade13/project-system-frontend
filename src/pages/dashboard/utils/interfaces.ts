export interface project {
    name:string,
    description:string,
    status:string,
    id:string    
}

export type dataUser = {
    data : {
        first_name:string,
        last_name:string,
        email: string,
        password: string,
        password_confirmation:string  
    }
}

export interface User {
    first_name:string,
    last_name:string,
    role:string,
    id:string,
    email:string
}