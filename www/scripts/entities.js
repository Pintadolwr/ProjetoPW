/** 
* @class Estrutura com capacidade de armazenar o estado de uma entidade
* @constructs Entity
* @param {string} nome - nome da entidade
* @param {string} email - email da entidade
* @param {string} password - password da entidade
*/
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

/** 
* @class Estrutura com capacidade de armazenar o estado de uma empresa
* @constructs Empresa
* @param {string} nome - nome da empresa
* @param {string} descricao - descricao da empresa
* @param {string} urlSite - urlSite da empresa
* @param {string} email - email da empresa
* @param {string} password - password da empresa
*/
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

/** 
* @class Estrutura com capacidade de armazenar o estado de um administrador
* @constructs Admin
* @param {string} nome - nome do admin
* @param {string} email - email do admin
* @param {string} password - password do admin
*/
class Admin extends Entity{
    constructor(nome, email, password){
        super(nome, email, password);
    }
}

/** 
* @class Estrutura com capacidade de armazenar o estado de um profissional
* @constructs Profissionais
* @param {string} nome - nome do profissional
* @param {Date} dataNasc - data de nascimento do profissional
* @param {string} genero - genero do profissional
* @param {string} descricao - descricao do profissional
* @param {string} email - email do profissional
* @param {string} password - password do profissional
* @param {string} localidade - localidade do profissional
* @param {boolean} visible
*/
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