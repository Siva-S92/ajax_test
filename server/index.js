import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { dataBaseConnection } from "./lib/db.js";
import { contentRouter } from "./routes/contentRouter.js";


//config the env variables
dotenv.config()

//server setup
const app = express();
const PORT = process.env.PORT;

//Middlewares
app.use(express.static('uploads'))
app.use(express.json())
app.use(cors({
    origin: "*"
}))

//Database Connection
dataBaseConnection();

//routes
app.get("/", async(req, res) => res.send("backend started"))
app.use("/api", contentRouter);

//Listen the server
app.listen(PORT, () => {
    console.log(`server running on the port ${PORT}`);
})