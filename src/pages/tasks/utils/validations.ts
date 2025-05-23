"use client"

import { z } from "zod"

export type formSchemaTaskType = z.infer<typeof formSchemaTask>;

export const formSchemaTask = z.object({
    title: z.string().min(2,{ message: "Titulo invalido tiene que tener mas caracteres" }),
    description: z.string().min(2,{ message: "Descripción invalida tiene que tener mas caracteres"}),
    project_id: z.string(),
    assigned_to_id: z.string(),
    status: z.string(),
    priority: z.string()
})
