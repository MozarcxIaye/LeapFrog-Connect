import z from "zod/v3";

export const registerSchema = z.object({
    email: z.string().email({message: "Invalid Email Address"}),
    password: z.string().min(8, {message: "Password must be 8 characters long"})
})

export type RegisterDTO = z.infer<typeof registerSchema>