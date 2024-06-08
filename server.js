import express from "express"
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import logger from "./BACKEND/utills/logger.js";


dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

const URL=process.env.MONGODB_URL;

const PORT = process.env.PORT || 8090;

mongoose.connect(URL,{
    useNewUrlparser:true,
    useUnifiedTopology:true,
});

const connection = mongoose.connection;
connection.once("open",()=>{
    logger.info('MongoDB is connected');
});

app.listen(PORT,()=>{
    logger.info(`server is up and running on ${PORT}`);
})

app.get("/",(req,res,next)=>{
    res.send("<h1>Library Management System</h1>");
    next();
})