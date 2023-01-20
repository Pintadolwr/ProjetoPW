"use strict";
const mysql = require("mysql2");
const express = require("express");
const session = require("express-session");
const path = require("path");
const options = require("../config/options.json");

const app = express();

app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "static")));

/**
 * Funçao que verifica se o login é efetuado com sucesso, utilizando o email e password
 * 
 * @param {*} request 
 * @param {*} response 
 */
function autenticate(request, response) {
  let connection = mysql.createConnection(options.mysql);
  connection.connect();
  // Capture the input fields
  let email = request.body.email;
  let password = request.body.password;
  // Ensure the input fields exists and are not empty
  if (email && password) {
    // Execute SQL query that'll select the account from the database based on the specified username and password
    connection.query(
      "(SELECT email, password FROM empresa WHERE email = ? AND password = ?) union all (SELECT email, password FROM profissionais WHERE email = ? AND password = ?)",
      [email, password, email, password],
      function (error, results, fields) {
        // If there is an issue with the query, output the error
        if (error) throw error;
        // If the account exists
        if (results.length > 0) {
          // Authenticate the user
          request.session.loggedin = true;
          request.session.email = email;
          // Redirect to home page
          console.log("login sucess");
          response.redirect("/");
        } else {
          response.send("Email ou password!");
        }
        response.end();
      }
    );
  } else {
    response.send("Porfavor insira email e password!");
    response.end();
  }
  connection.end();
}

/**
 * Funçao responsavel pela criaçao e inserçao de uma conta nova do tipo Empresa na base de dados
 * 
 * @param {*} request 
 * @param {*} response 
 */
function registerE(request, response) {
  let connection = mysql.createConnection(options.mysql);
  connection.connect();
  // Capture the input fields
  let name = request.body.nameE;
  let description = request.body.descriptionE;
  let url = request.body.urlE;
  let email = request.body.emailE;
  let password = request.body.passwordE;
  // Ensure the input fields exists and are not empty
  if (email && password && name) {
    // Execute SQL query that'll select the account from the database based on the specified username and password
    connection.query(
      "INSERT INTO empresa (name, descricao, urlSite, email, password) values(? , ? , ? , ? , ?)",
      [name, description, url, email, password],
      function (error, results, fields) {
        // If there is an issue with the query, output the error
        if (error) throw error;
        // If the account exists
        console.log("register as emp sucess");
        response.redirect("/");

        response.end();
      }
    );
  } else {
    response.send("Algo deu errado!");
    response.end();
  }
  connection.end();
}


/**
 * Funçao responsavel pela criaçao e inserçao de uma conta nova do tipo Profissional na base de dados
 * 
 * @param {*} request 
 * @param {*} response 
 */
function registerP(request, response) {
  console.log("entrou");
  let connection = mysql.createConnection(options.mysql);
  connection.connect();
  // Capture the input fields
  let name = request.body.nameP;
  let description = request.body.descriptionP;
  let email = request.body.emailP;
  let password = request.body.passwordP;
  let localidade = request.body.localidade;
  console.log(
    name + " " + email + " " + password + " " + description + " " + localidade
  );
  // Ensure the input fields exists and are not empty
  if (email && password && name) {
    // Execute SQL query that'll select the account from the database based on the specified username and password
    connection.query(
      "INSERT INTO profissionais (name, email, password, descricao, localidade) values(? , ? , ?, ?, ?)",
      [name, email, password, description, localidade],
      function (error, results, fields) {
        // If there is an issue with the query, output the error
        if (error) throw error;
        // If the account exists
        console.log("register as prof sucess");
        response.redirect("/");

        response.end();
      }
    );
  } else {
    response.send("Algo deu errado");
    response.end();
  }
  connection.end();
}

/**
 * Funçao responsavel pela realizaçao do logout, apos o utilizador ter feito o login
 * 
 * @param {*} request 
 * @param {*} response 
 */
function logout(request, response) {
	console.log(request.session.loggedin)
  if (request.session.loggedin) {
    request.session.loggedin = false;
    request.session.email = "";
    console.log("logout success");
    response.redirect("/");
  } else {
    response.send("Nao tem o log in feito!");
  }
  response.end();
}

module.exports.autenticate = autenticate;
module.exports.registerE = registerE;
module.exports.registerP = registerP;
module.exports.logout = logout;
module.exports.app = app;