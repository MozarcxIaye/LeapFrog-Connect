import express from "express"
import type { Request, Response } from "express"
import dotenv from "dotenv"
import { connectDB } from "./config/db.ts"

const app = express()
dotenv.config({path: ".env"})

const PORT = process.env.PORT

app.use(express.json())
await connectDB()

app.get("/", (_req: Request, res: Response) => {
    res.status(200).json({
        message: "event-mgmt main route"
    })
})

app.get("/health", (_req: Request, res: Response) => {
    res.status(200).json({
        message: "Health OK"
    })
})

app.listen(PORT, () => {
    console.log("Server running on PORT, ", PORT)
})


