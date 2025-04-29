"use client"

import { z } from "zod"

export type formSchemaCreateUserType = z.infer<typeof formSchemaCreateUser>;

export const formSchemaCreateUser = z.object({
    first_name: z.string().min(3,{message: "El nombre debe tener al menos 3 caracteres"}),
    last_name: z.string().min(3,{message: "El apellido debe tener al menos 3 caracteres"}),
    email: z.string().email({ message: "Dirección de correo invalida" }),
    password: z.string().min(6,{message: "Contraseña debe tener al menos 6 caracteres"}),
    password_confirmation : z.string().min(6,{message: "Contraseña debe tener al menos 6 caracteres"}),
    role: z.string()
})