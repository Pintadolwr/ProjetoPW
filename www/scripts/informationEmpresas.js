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
function showEmpresa (empresas) {
	let listaEmpresas = document.getElementById("listaEmpresas");
	if(listaEmpresas !== null){
		empresas.forEach((empresa)=>{
		let li = document.createElement("li");
		li.innerText = empresa.info();
		listaEmpresas.appendChild(li);
		})
	}
};


/**
 * Função que que tem como principal objetivo solicitar ao servidor NODE.JS o recurso empresa através do verbo GET, usando pedidos assincronos e JSON
 */
Information.prototype.getEmpresas = function () {
	/** @todo Completar */
	const xhttp = new XMLHttpRequest();
	let empresas = this.empresas;
	xhttp.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			let res = JSON.parse(this.responseText);
			res.empresa.forEach(elem => empresas.push(
				new Empresa(elem.id, elem.name, elem.descricao, elem.urlSite, elem.email, null, elem.urlLogo)));
			showEmpresa(empresas);
		}
	};
	xhttp.open("GET", "empresa", true);
	xhttp.send();

};


window.onload = (event) =>{
	let info = new Information("empresas");
	info.getEmpresas();
}