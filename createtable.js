import {sql}  from './db.js';

/* sql`DROP TABLE IF EXISTS minha_tabela `.then(() => {
  console.lof("tabela apagada!");
}) */

sql`CREATE TABLE atividades (
    id INTEGER PRIMARY KEY,
    name TEXT,
    prof TEXT,
    content TEXT,
    date TEXT
  );
  `.then(() => {
    console.log("Tabela criada com sucesso!");
  });