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
        Duração: ${this.duracaoMeses}, Valor Total: ${this.valorTotal}, Data Validade: ${this.dataValidade}`;
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