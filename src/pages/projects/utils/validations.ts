"use client"

import { z } from "zod"

export type formSchemaProjectType = z.infer<typeof formSchemaProject>;

export const formSchemaProject = z.object({
    name: z.string().min(2,{ message: "Titulo invalido tiene que tener mas caracteres" }),
    description: z.string().min(2,{ message: "Descripción invalida tiene que tener mas caracteres"}),
    status: z.string(),
})
