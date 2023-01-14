"use strict";
const mysql = require("mysql2");
const options = require("../config/options.json");

/**
 * Função para retornar a lista de empresas da BD.
 * @param {Function} callback Função de callback para ser chamada após obtermos o resultado da BD
 */
function getEmpresasModel(callback){
    let connection = mysql.createConnection(options.mysql); //criar a conexão
    connection.conect(); //Abrir a conexão
    connection.query('SELECT * FROM empresas',
    function(err, rows, fields){
        if(err){
            callback({"error":err})
        }else{
            callback({"empresa":rows})
        }
    }); //Query à BD
    connection.end(); //Fechar conexão
}

module.exports.getEmpresasModel = getEmpresasModel;