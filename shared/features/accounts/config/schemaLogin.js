import { z } from "zod";

export const schemaLogin = z.object({
    email: z.email({ message: "INVALID_FORMAT_EMAIL" }),
    password: z.string("INVALID_FORMAT_PASSWORD").min(7, "MIN_PASSWORD_LENGTH"),
})

