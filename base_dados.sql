drop database pw_projeto;
create database if not exists pw_projeto character set 'utf8' collate 'utf8_general_ci';

use pw_projeto;


CREATE TABLE empresa (
	id int(6) unsigned auto_increment primary key,
    name varchar(255) not null,
    descricao varchar(500),
    urlSite varchar(255),
    email varchar(255) not null,
    password varchar(50) not null,
    urlLogo varchar(255)
);

CREATE TABLE admin (
	id int(6) unsigned auto_increment primary key,
    name varchar(255) not null,
    email varchar(255) not null,
    password varchar(50) not null
);

CREATE TABLE profissionais (
	id int(6) unsigned auto_increment primary key,
    name varchar(255) not null,
    dataNasc date,
    genero character,
    descricao varchar(500),
    email varchar(255),
    localidade varchar(255),
    password varchar(50) not null,
    visible boolean
);

CREATE TABLE curso (
	id int(6) unsigned auto_increment primary key,
    estabelecimento varchar(100),
    nome varchar(255),
    tipo varchar(100),
    media float
);

CREATE TABLE localTrabalho (
    id int(6) unsigned auto_increment primary key,
    nomeLocal varchar(255),
    urlLogo varchar(255),
    dataInicio date,
    dataFim date,
    descricao varchar(500)
);

INSERT INTO empresa (name, email, password) values('teste1', 'teste1@email.com', 'ppppp');
select * from empresa;

INSERT INTO profissionais (name, email, password, visible) values('teste2', 'teste2@email.com', 'ddddd', true);

