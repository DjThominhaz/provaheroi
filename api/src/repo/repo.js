import {con} from "./connection.js"

export async function consulta(){
    const comando =
    `select * from TB_HEROI`
    const [resposta]=await con.query(comando)
    return resposta
}

export async function login(heroi){
    const comando = ` 
    insert into  TB_HEROI (NM_HEROI, DS_PODER, BT_VOA) 
                            values (?, ?, ?)
    `
    const [resposta] = await con.query(comando, [heroi.nome, heroi.poderes, heroi.voa]);
    heroi.id= resposta.insertId;
    return heroi;
}

