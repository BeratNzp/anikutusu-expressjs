import express from "express"
import mongoose from "mongoose"
import cors from "cors";
import dotenv from "dotenv"

import memoryRouter from "./routers/memoryRouter.js"

dotenv.config()

const app = express()
app.use(express.json())

app.use("/memories", memoryRouter)

app.listen(process.env.SERVER_PORT, () => {
    mongoose.connect(process.env.DATABASE_URI, {
        useUnifiedTopology: true
    }).then(() => console.log("Database connected succesfully."))
    .catch((err) => console.log("Database connection failed."))
})