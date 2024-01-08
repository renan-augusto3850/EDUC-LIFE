import sql  from './db.js';

/*sql`DROP TABLE IF EXISTS atividades `.then(() => {
  console.log("tabela apagada!");
})*/

sql`CREATE TABLE atividades (
    id TEXT PRIMARY KEY,
    name TEXT,
    prof TEXT,
    content TEXT,
    date TEXT
  );
  `.then(() => {
    console.log("Tabela criada com sucesso!");
  });