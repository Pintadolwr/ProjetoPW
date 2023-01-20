"use strict";
const mysql = require("mysql2");
const options = require("../config/options.json");

/**
 * Função para retornar a lista de empresas da BD.
 * @param {Function} callback Função de callback para ser chamada após obtermos o resultado da BD
 */
function getEmpresasModel(callback){
    let connection = mysql.createConnection(options.mysql); //criar a conexão
    connection.connect(); //Abrir a conexão
    connection.query('select id, name, descricao, urlSite, email, urlLogo from empresa',
    function(err, rows, fields){
        if(err){
            callback({"error":err})
        }else{
            callback({"empresa":rows})
        }
    }); //Query à BD
    connection.end(); //Fechar conexão
}

/**
 * Função para retornar a lista de profissionais da BD.
 * @param {Function} callback Função de callback para ser chamada após obtermos o resultado da BD
 */
function getProfissionaisModel(callback){
    let connection = mysql.createConnection(options.mysql); //criar a conexão
    connection.connect(); //Abrir a conexão
    connection.query('select id, name, dataNasc, genero, descricao, email, localidade from profissionais where visible = true',
    function(err, rows, fields){
        if(err){
            callback({"error":err})
        }else{
            callback({"profissional":rows})
        }
    }); //Query à BD
    connection.end(); //Fechar conexão
}

module.exports.getEmpresasModel = getEmpresasModel;
module.exports.getProfissionaisModel = getProfissionaisModel;