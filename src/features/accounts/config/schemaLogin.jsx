import { z } from "zod";

export const schemaLogin = z.object({
    email: z.email({ message: "Insira um email válido" }),
    password: z.string("Formato de senha inválida").min(7, "Número de caracteres de senha insuficiente"),
})

