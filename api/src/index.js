import 'dotenv/config'
import cors from 'cors'
import express from 'express'

import controller from './controller/controller.js'
 
const server=express();
server.use(cors());
server.use(express.json());



server.use(controller);


server.listen(process.env.PORT, 
                () => console.log(`Api online at ${process.env.PORT}`))