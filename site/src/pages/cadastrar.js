import { useState } from "react"
import { Link } from "react-router-dom";
import { cadastrarherois} from "../api/chamar"
import './index.css';

export default function Index(){
    const [nome, setNome] = useState('');
    const [poderes, setPoderes] = useState('');
    const [voa, setVoa] = useState(false);

    async function SalvarClick(){
        try{
        const r = await cadastrarherois(nome,poderes,voa)
        alert('Heroi cadastrado com sucesso')

        }catch(err){
            alert(err.message)
            
        }
    }



    return(
    <main>
        <h1>Cadastro do Heroi</h1>

        <label> Insira Nome:</label>
        <br/>
        <input type='text' placeholder="Nome do Heroi" value={nome} onChange={e => setNome(e.target.value)}/>
        <br/>
        <label>Insira o Poder do Heroi</label>
        <br/>
        <input type='text' placeholder="Poder do Heroi" value={poderes} onChange={e => setPoderes(e.target.value)}/>
        <br/>
        <input type= 'checkbox' checked={voa} onChange={e => setVoa(e.target.checked)}/> Voa ?
        <button onClick={SalvarClick}>Cadastrar</button>

        <br/>
        <br/>

        <Link to='/consultar'>Herois Cadastrados </Link>

    </main>

    )


}