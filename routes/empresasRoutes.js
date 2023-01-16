"use strict"
const mysqlModel = require("../models/mysqlModel");

/**
 * Função para retornar a lista de empresas da BD e passar a informação
 * para a plataforma que fez o pedido (neste caso o browser).
 * @param {*} req 
 * @param {*} res 
 */

function getEmpresas(req, res){
    let getEmpresasResult = mysqlModel.getEmpresasModel(function(resultObject){
        if(resultObject.error){
            res.json({"message":"error", "error":resultObject.error})
        }
        else{
            res.json({"message":"success", "empresa":resultObject.error})
        }
    });
}

module.exports.getEmpresas = getEmpresas;