import sqlite3 from "sqlite3";

const SQlite = sqlite3.verbose();

function query(command,params,method = 'all'){
    return new Promise(function(resolve,reject){
        db[method](command,params,function(error,result){
            if(error)
                reject(error)
            else
                resolve(result);
        });
    });
}
const db = new SQlite.Database("./src/database/banco.db",
    sqlite3.OPEN_READWRITE, (err) => {
        if(err)
            return console.log("Erro ao conectar com banco"+err.message);
    });

    export {db,query}