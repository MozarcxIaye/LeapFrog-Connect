import {z} from "zod"

export const createEventSchema = z.object({
    title: z.string().min(1, "Title is required"),
    venue: z.string().min(1, "Venue is required"),
    eventDate: z.string().min(1, "EventDate is required")
})

export const updateEventSchema = createEventSchema.partial

export type CreateEventDTO = z.infer<typeof createEventSchema>
export type UpdateEventDTO = z.infer<typeof updateEventSchema>