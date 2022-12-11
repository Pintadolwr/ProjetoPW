/*
function OfertaEmprego(nomeEmpresa, descricao, area, duracaoMeses, valorTotal, dataValidade){
    if(area === Area.Program || area === Area.DataBase || area === Area.SistemAdmin)
        var oferta = [nomeEmpresa, descricao, area, duracaoMeses, valorTotal, dataValidade];
    return oferta;
};
*/
const Area = {
    Program: 'Programação',
    DataBase: 'Bases de Dados',
    SistemAdmin: 'Administração de Sistemas'
}


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

class Entity{
    constructor(nome, email, password){
        this.nome = nome;
        this.email = email;
        this.password = password;
    }
    info(){
        return `${this.nome}, ${this.email}, ${this.password}`;
    }
    equals(e1, e2){
        if(e1.email === e2.email && e1.password === e2.password)
            return true;
    }
}

class Empresa extends Entity{
    constructor(nome, descricao, urlSite, email, password, urlLogo){
        super(nome, email, password);
        this.descricao = descricao;
        this.urlSite = urlSite;
        this.urlLogo = urlLogo;
    }
    info(){
        return `${super.info()}, ${this.descricao}, ${this.urlSite}, ${this.urlLogo}`;
    }
}

class Admin extends Entity{
    constructor(nome, email, password){
        super(nome, email, password);
    }
}

class Profissionais extends Entity{
    constructor(nome, dataNasc, genero, descricao, email, password, localidade, visible){
        super(nome, email, password);
        this.dataNasc = dataNasc;
        this.genero = genero;
        this.descricao = descricao;
        this.localidade = localidade;
        this.visible = visible;
    }
}

class LocalTrabalho{
    constructor(nome, url, dataInicio, dataFim, descricaoFuncoes){
        this.nome = nome;
        this.url = url;
        this.dataInicio = dataInicio;
        this.dataFim = dataFim;
        this.descricaoFuncoes = descricaoFuncoes;
    }
}

class Curso{
    constructor(estabelecimento, nomeCurso, tipoCurso, media){
        this.estabelecimento = estabelecimento;
        this.nomeCurso = nomeCurso;
        this.tipoCurso = tipoCurso;
        this.media = media;
    }
}

const ofertas = [];
ofertas.push(new OfertaEmprego("Doloitte", "Empresa de Tecnologias Avançadas", "Programação",3, 1200, "28/12/2022"),  
             new OfertaEmprego("CNN", "Noticias", "Televisao",6, 800, "21/06/2023"),
             new OfertaEmprego("TVI", "Noticias", "Televisao",12, 900, "12/02/2023"),
             new OfertaEmprego("Frescos e Enlatados", "Tranporte de congelados", "Transportes",6, 1000, "1/10/2023"));



function listaOfertasEmprego(){
    let listaOfertas = document.getElementById("ofertasEmprego");
    if(listaOfertas !== null){
        ofertas.forEach((item)=>{
        let li = document.createElement("li");
        li.innerText = item.info();
        listaOfertas.appendChild(li);
        })
    }
}


function btnsOfertas(){
    var btnInserir = document.getElementById("btnInserir");
    var btnRemover = document.getElementById("btnRemover");
    var oferta;

    var inserir = function(){
        oferta = prompt("Nome Empresa|Descrição|Área|Duração (Meses)|Valor Total|Data de validade");
        if(oferta){
            let arrOferta = oferta.split("|");
            return new OfertaEmprego(arrOferta[0],arrOferta[1],arrOferta[2],arrOferta[3],arrOferta[4],arrOferta[5],)

        }
    }

    btnInserir.addEventListener("click", function(evt){
        oferta = inserir();

        var li = document.createElement("li");
        var txtLi = document.createTextNode(oferta.show);

        li.appendChild(txtLi);
        listaPessoas.appendChild(li);
    });

}

window.onload = (event) => {
    listaOfertasEmprego(); 
    //btnsOfertas();
};
