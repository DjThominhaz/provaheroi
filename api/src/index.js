import 'dotenv/config'
import cors from 'cors'
import express from 'express'

import controller from './controller/controller.js'
 
const server=express()
server.use(cors())
server.use(controller)
server.use(express.json())


server.listen(process.env.PORT, 
                () => console.log(`Api online at ${process.env.PORT}`))