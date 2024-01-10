import sql from "./db.js";
import {randomUUID} from "crypto"

export class databasePostgres {
    async listAll(){
        const results = await sql`select * from atividades`;
        return results;
    }
    async createExercies(atividade){
        const id = randomUUID();
        console.log(id);
        const {name, prof, content, date} = atividade;
        console.log("data: ", name, prof, content, date);
        await sql`insert into atividades (id, name, prof, content, date) values(${id}, ${name}, ${prof}, ${content}, ${date})`;
    }
}