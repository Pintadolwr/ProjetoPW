"use strict";

/** 
* @class Guarda toda informação necessaria na execução do exercicio 
* @constructs Informacao
* @param {string} id - id do elemento HTML que contém a informação.
* 
* @property {string} id - id do elemento HTML que contém a informação.
* @property {country[]} empresas - Array de objetos do tipo Empresa, para guardar todos as empresas do nosso sistema
* @property {person[]} profissionais - Array de objetos do tipo Profissional, para guardar todas os profissionais do nosso sistema
*/
function Information(id) {
	this.id = id;
	this.empresas = [];
	this.profissionais = [];
};


/**
 * Cria dinamicamente uma tabela com a informação das empresas
 */
function showProfissionais (profissionais) {
	let listaProfissionais = document.getElementById("listaProfissionais");
	if(listaProfissionais !== null){
		profissionais.forEach((profissional)=>{
		let li = document.createElement("li");
		li.innerText = profissional.info();
		listaProfissionais.appendChild(li);
		})
	}
};


/**
 * Função que que tem como principal objetivo solicitar ao servidor NODE.JS o recurso empresa através do verbo GET, usando pedidos assincronos e JSON
 */
Information.prototype.getProfissionais = function () {
	/** @todo Completar */
	const xhttp = new XMLHttpRequest();
	let profissionais = this.profissionais;
	xhttp.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			let res = JSON.parse(this.responseText);
			res.profissional.forEach(elem => profissionais.push(
				new Profissionais(elem.id, elem.name, elem.dataNasc, elem.genero,
                     elem.descricao, elem.email, null, elem.localidade, true)));
			showProfissionais(profissionais);
		}
	};
	xhttp.open("GET", "profissional", true);
	xhttp.send();

};


window.onload = (event) =>{
	let info = new Information("profissionais");
	info.getEmpresas();
}