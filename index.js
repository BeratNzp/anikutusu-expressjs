import express from "express"
import mongoose from "mongoose"
import cors from "cors";
import dotenv from "dotenv"

import memoryRouter from "./routers/memoryRouter.js"

dotenv.config()

const app = express()

app.use(express.json({limit: '2048kb'}));

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

app.use("/memories", cors(corsOptions), memoryRouter)

app.listen(process.env.SERVER_PORT, () => {
    mongoose.connect(process.env.DATABASE_URI, {
        useUnifiedTopology: true
    }).then(() => console.log("Database connected succesfully."))
    .catch((err) => console.log(err))
})