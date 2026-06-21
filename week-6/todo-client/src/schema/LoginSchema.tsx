import z from "zod/v3";

export const loginSchema = z.object({
    email: z.string().email({message: "Invalid Email Address"}),
    password: z.string().min(8, {message: "Password must be 8 characters long"})
})

export type LoginDTO = z.infer<typeof loginSchema>