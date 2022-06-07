import {con} from "./connection.js"

export async function consulta(){
    const comando =
    `select * from TB_HEROI`
    const [resposta]=await con.query(comando)
    return resposta
}

export async function login(novonome){
    const comando = ` 
    insert into TB_HEROI (NM_HEROI) VALUES (?)
    insert into TB_HEROI (DS_PODER) VALUES (?)
    insert into TB_HEROI (BT_VOA) VALUES (?)
    `
    const [resposta] = await con.query(comando,[novonome.nome])
    return resposta[0]
}

