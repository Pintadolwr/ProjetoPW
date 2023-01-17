"use strict"
const mysqlModel = require("../models/mysqlModel");

/**
 * Função para retornar a lista de profissionais da BD e passar a informação
 * para a plataforma que fez o pedido (neste caso o browser).
 * @param {*} req 
 * @param {*} res 
 */

function getProfissionais(req, res){
    let getProfissionaisResult = mysqlModel.getProfissionaisModel(function(resultObject){
        if(resultObject.error){
            res.json({"message":"error", "error":resultObject.error})
        }
        else{
            res.json({"message":"success", "profissional":resultObject.profissional})
        }
    });
}

module.exports.getProfissionais = getProfissionais;