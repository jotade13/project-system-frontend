"use client"

import { z } from "zod"

/*
export type formSchema = z.infer<typeof formSchemaRegister>;

export const formSchemaRegister = z.object({
    first_name: z.string().min(3,{message: "El nombre debe tener al menos 3 caracteres"}),
    last_name: z.string().min(3,{message: "El apellido debe tener al menos 3 caracteres"}),
    email: z.string().email({ message: "Dirección de correo invalida" }),
    password: z.string().min(6,{message: "Contraseña debe tener al menos 6 caracteres"}),
    password_confirmation : z.string().min(6,{message: "Contraseña debe tener al menos 6 caracteres"}),
})*/

export type formSchemaTaskType = z.infer<typeof formSchemaTask>;

export const formSchemaTask = z.object({
    title: z.string().min(2,{ message: "Titulo invalido tiene que tener mas caracteres" }),
    description: z.string().min(2,{ message: "Descripción invalida tiene que tener mas caracteres"}),
    project_id: z.string(),
    assigned_to_id: z.string(),
    status: z.string(),
    priority: z.string()
})
