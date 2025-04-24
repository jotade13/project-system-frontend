"use client"

import { z } from "zod"

export type formSchemaProjectsType = z.infer<typeof formSchemaProjects>;

export const formSchemaProjects = z.object({
    title: z.string().min(2,{ message: "Titulo invalido tiene que tener mas caracteres" }),
    description: z.string().min(2,{ message: "Descripción invalida tiene que tener mas caracteres"}),
    status: z.string(),
})
