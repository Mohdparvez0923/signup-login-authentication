import 'dotenv/config'
import express, { Router } from "express";
import DBConnection from './models/db.js';
import router from './routes/router.js';
import cors from 'cors'

const App = express();    
DBConnection();
App.use(cors());
App.use(express.json()); 
App.use(express.urlencoded({ extended: true }));
App.use("/account",router)
const PORT = process.env.PORT || 3000
App.listen(PORT,()=>console.log(`server is running on ${PORT}`));