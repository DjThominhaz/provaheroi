import axios from 'axios'
const api = axios.create({
    baseURL:'http://localhost:5000'
})

export async function cadastrarherois(nome,poderes,voa){
    const r = await api.post('/cadastro',{
        
            nome: nome,
            poderes:poderes,
            voa:voa
        
    })
    return r.data
}

export async function ListarTodososHerois(){
    const r = await api.get('/procurar')
    return r.data
}