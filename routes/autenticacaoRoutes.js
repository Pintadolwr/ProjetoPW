"use strict"
const mysql = require('mysql2');
const express = require('express');
const session = require('express-session');
const path = require('path');
const options = require("../config/options.json");
	
const app = express();

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));


function autenticate(request, response) {
	let connection = mysql.createConnection(options.mysql); 
	connection.connect();
	// Capture the input fields
	let email = request.body.email;
	let password = request.body.password;
	// Ensure the input fields exists and are not empty
	if (email && password) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		connection.query('SELECT * FROM empresa WHERE email = ? AND password = ?', [email, password], function(error, results, fields) {
			// If there is an issue with the query, output the error
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				// Authenticate the user
				request.session.loggedin = true;
				request.session.email = email;
				// Redirect to home page
				console.log("login sucess");
				response.redirect('/');
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
		/*
		connection.query('SELECT * FROM profissionais WHERE email = ? AND password = ?', [email, password], function(error, results, fields) {
			// If there is an issue with the query, output the error
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				// Authenticate the user
				request.session.loggedin = true;
				request.session.email = email;
				// Redirect to home page
				console.log("login sucess");
				response.redirect('/');
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});*/
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
	connection.end();
};

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
		connection.query("INSERT INTO empresa (name, descricao, urlSite, email, password) values(? , ? , ? , ? , ?)", [name, description, url, email, password], function(error, results, fields){
			// If there is an issue with the query, output the error
			if (error) throw error;
			// If the account exists
			console.log("register as emp sucess");
			response.redirect('/');
	
			response.end();
		});
	} else {
		response.send('Something went wrong2!');
		response.end();
	}
	connection.end();
};

function registerP(request, response) {
	console.log("entrou")
	let connection = mysql.createConnection(options.mysql); 
	connection.connect();
	// Capture the input fields
	let name = request.body.nameP;
	let description = request.body.descriptionP;
	let email = request.body.emailP;
	let password = request.body.passwordP;
	let localidade = request.body.localidade;
	console.log(name +" "+email+" "+password+" "+description+" "+localidade)
	// Ensure the input fields exists and are not empty
	if (email && password && name) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		connection.query("INSERT INTO profissionais (name, email, password, descricao, localidade) values(? , ? , ?, ?, ?)", [name, email, password, description, localidade], function(error, results, fields){
			// If there is an issue with the query, output the error
			if (error) throw error;
			// If the account exists
			console.log("register as prof sucess");
			response.redirect('/');
	
			response.end();
		});
	} else {
		response.send('Something went wrong2!');
		response.end();
	}
	connection.end();
};

module.exports.autenticate = autenticate;
module.exports.registerE = registerE;
module.exports.registerP = registerP;
module.exports.app = app;

