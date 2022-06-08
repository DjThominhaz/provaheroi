import { login, consulta } from "../repo/repo.js";
import { Router } from "express";

const server=Router()

server.post('/cadastro', async (req, resp)=>{
    try{
        const nome=req.body

        const resposta= await login(nome)
        
        resp.send(resposta)
    }catch(err){
        resp.status(400).send({erro: err.message})
    }
})

server.get('/procurar', async(req,resp)=>{
    try{
        const a= await consulta()
        resp.send(a)
    }catch(err){
        resp.status(404).send({erro:err.message})
    }
})

export default server