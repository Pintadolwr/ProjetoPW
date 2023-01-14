/** 
* @class Estrutura com capacidade de armazenar o estado de um curso
* @constructs Curso
* @param {string} estabelecimento - estabelecimento do curso
* @param {string} nomeCurso - nome do curso
* @param {string} tipoCurso - tipo do curso
* @param {float} media - media do curso
*/
class Curso{
    constructor(estabelecimento, nomeCurso, tipoCurso, media){
        this.estabelecimento = estabelecimento;
        this.nomeCurso = nomeCurso;
        this.tipoCurso = tipoCurso;
        this.media = media;
    }
}