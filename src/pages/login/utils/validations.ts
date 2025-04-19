"use client"

import { z } from "zod"

export type formSchemaRegisterType = z.infer<typeof formSchemaRegister>;

export const formSchemaRegister = z.object({
    first_name: z.string().min(3,{message: "El nombre debe tener al menos 3 caracteres"}),
    last_name: z.string().min(3,{message: "El apellido debe tener al menos 3 caracteres"}),
    email: z.string().email({ message: "Dirección de correo invalida" }),
    password: z.string().min(6,{message: "Contraseña debe tener al menos 6 caracteres"}),
    password_confirmation : z.string().min(6,{message: "Contraseña debe tener al menos 6 caracteres"}),
})
/*.refine((data) => data.password === data.password_confirmation, {
    message: "Passwords don't match",
    path: ["confirm"], // path of error
  });*/
export type formSchemaLoginType = z.infer<typeof formSchemaLogin>;

export const formSchemaLogin = z.object({
    email: z.string().email({ message: "Dirección de correo invalida" }),
    password: z.string().min(6,{message: "Contraseña debe tener al menos 6 caracteres"}).max(50, {message: "La contraseña no puede tener 50 caracteres"})
})
