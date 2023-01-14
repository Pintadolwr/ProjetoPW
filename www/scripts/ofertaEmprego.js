/** 
* @class Estrutura com capacidade de armazenar o estado de uma oferta de emprego
* @constructs Oferta de Emprego
* @param {string} nomeEmpresa - nome da oferta
* @param {string} descricao - descrição da oferta
* @param {string} area - area da oferta
* @param {int} duracaoMeses - duracao da oferta
* @param {float} valorTotal - valor total da oferta
* @param {date} dataValidade - data validade da oferta
*/
class OfertaEmprego{
    constructor(nomeEmpresa, descricao, area, duracaoMeses, valorTotal, dataValidade){
        this.nomeEmpresa = nomeEmpresa;
        this.descricao = descricao;
        this.area = area;
        this.duracaoMeses = duracaoMeses;
        this.valorTotal = valorTotal;
        this.dataValidade = dataValidade;
    }
    info(){
        return `Empresa: ${this.nomeEmpresa}, Descricao: ${this.descricao}, Area: ${this.area}, 
        Duração: ${this.duracaoMeses} meses, Valor Total: ${this.valorTotal} €, Data Validade: ${this.dataValidade}`;
    }
}
