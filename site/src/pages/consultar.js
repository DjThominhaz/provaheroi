import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { ListarTodososHerois} from "../api/chamar"
import './index.css';


export default function Index(){
    const [heroi, setHeroi] = useState([]);
    
    async function CarregarTodososHerois(){
        const resp = await ListarTodososHerois();
        console.log(resp)
        setHeroi(resp);
    }

   useEffect(() => {
    CarregarTodososHerois();
   }, [])

    return(
    <main>
        <h1>Herois Cadastrados</h1>

        {heroi.map(item =>
            <tr>
                <h4>ID Do Heroi - </h4><td>{item.ID_HEROI + " - "} </td>
                <h4> Nome do Heroi -</h4><td>{item.NM_HEROI + " - "}</td>
                <h4>Poder do Heroi -</h4><td>{item.DS_PODER + " - "}</td>
                <h4>Heroi Voa ? -</h4><td>{item.BT_VOA ? 'Sim' : 'Não'}</td>
            </tr>
        
        )}

        <br/>

        <Link to='/'>Cadastrar novo Heroi</Link>

    </main>

    )


}