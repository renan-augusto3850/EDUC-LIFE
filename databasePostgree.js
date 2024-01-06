import {sql} from "./db.js";

export class databasePostgres {
    async listAll(){
        const results = await sql`select * from atividades`;
        return results;
    }
    async createExercies(atividade){
        const id = randomUUID();
        const {name, prof, content, date} = atividade;
        await sql`insert into atividades (id, name, prof, content, date) values(${id}, ${name}, ${prof}, ${content}, ${date})`;
    }
}