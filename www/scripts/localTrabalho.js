/** 
* @class Estrutura com capacidade de armazenar o estado de um local de trabalho
* @constructs Local de Trabalho
* @param {string} nome - nome do local de trabalho
* @param {string} url - url do local de trabalho
* @param {Date} dataInicio - data de inicio
* @param {Date} dataFim - data de fim
* @param {string} descricao - descricao do local de trabalho
*/
class LocalTrabalho{
    constructor(nome, url, dataInicio, dataFim, descricaoFuncoes){
        this.nome = nome;
        this.url = url;
        this.dataInicio = dataInicio;
        this.dataFim = dataFim;
        this.descricaoFuncoes = descricaoFuncoes;
    }
}