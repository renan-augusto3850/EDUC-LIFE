import http from "http";
import url from "url"
import fs from "fs";
import {databasePostgres} from "./databasePostgres.js";

const database = new databasePostgres();

const hostname = '0.0.0.0'
const port = 800;
const server = http.createServer( async (req, res) => {
    const pagepath = url.parse(req.url).pathname;
    if( req.method = "POST" && pagepath.startsWith("/POSTEXERCISES")){
        let atividadeJSON = '';
        req.on('data', chunk => {
            atividadeJSON += chunk.toString();
        });
        req.on('end', async () => {
            console.log(pagepath);
            res.statusCode= 200;
            var atividades = JSON.parse(atividadeJSON);
            console.log(atividades);
            await database.createExercies(atividades);
        });
        
    } else if (pagepath.startsWith("/GETEXERCISES")) {
        console.log(pagepath);
        res.statusCode = 200;
        let data = await database.listAll();
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(data));
                
    }else if (pagepath.startsWith("/JS")) {
        fs.readFile("PUBLIC/PAGES" + pagepath, (err, data) => {
            if(err){
                res.statusCode = 404;
                res.setHeader("Content-Type", "text/html");
                res.end("<h1>NOT FOUND OR SERVER ERROR 500/404</h1>");
                console.log(pagepath);
            } else {
                res.statusCode = 200;
                res.setHeader("Content-Type", "text/js");
                res.end(data);
                
            }
        });
    } else
    if (pagepath.startsWith("/IMAGES")) {
        fs.readFile("PUBLIC" + pagepath, (err, data) => {
            if(err){
                res.statusCode = 404;
                res.setHeader("Content-Type", "text/html");
                res.end("<h1>NOT FOUND OR SERVER ERROR 500/404</h1>");
                console.log(pagepath);
            } else {
                res.statusCode = 200;
                res.setHeader("Content-Type", "image/png");
                res.end(data);
                
            }
        });
    } else if (pagepath.startsWith("/CSS")) {
        fs.readFile("PUBLIC/PAGES/" + pagepath, (err, data) => {
            if(err){
                res.statusCode = 404;
                res.setHeader("Content-Type", "text/html");
                res.end("<h1>NOT FOUND OR SERVER ERROR 500/404</h1>")
            } else {
                
                res.statusCode = 200;
                res.setHeader("Content-Type", "text/css");
                res.end(data);
                
            }
        });
    } else {
        if(pagepath === '/'){
            fs.readFile('PUBLIC/PAGES/index.html', (err, data) => {
                if(err){
                    res.statusCode = 404;
                    res.setHeader("Content-Type", "text/html");
                    res.end("<h1>NOT FOUND OR SERVER ERROR 500/404</h1>")
                } else {
                    
                    res.statusCode = 200;
                    res.setHeader("Content-Type", "text/html");
                    res.end(data);
                    
                }
            });
        } else {
            fs.readFile("PUBLIC/PAGES" + pagepath, (err, data) => {
                if(err){
                    res.statusCode = 404;
                    res.setHeader("Content-Type", "text/html");
                    res.end("<h1>NOT FOUND OR SERVER ERROR 500/404</h1>");
                } else{
                    res.statusCode = 200;
                    res.setHeader("Content-Type", "text/html");
                    res.end(data);
                }
            })
        }
    }
});

    

server.listen(process.env.PORT ?? port, hostname, () => {
    console.log("Server rodando na porta ", port);
});