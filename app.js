"use strict";
const express = require("express");
const session = require("express-session");
const options = require("./config/options.json");
/** @todo Completar */
const autenticacaoRoutes = require("./routes/autenticacaoRoutes");
const empresasRoutes = require("./routes/empresasRoutes");
const profissionaisRoutes = require("./routes/profissionaisRoutes");
const bodyParser = require("body-parser");
const { application } = require("express");
const app = express();

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("www"));

// Empresas
app.get("/empresa", empresasRoutes.getEmpresas);

// Profissionais
app.get("/profissionais", profissionaisRoutes.getProfissionais);

//autenticacao
app.post("/auth", autenticacaoRoutes.autenticate)

app.post("/registerP", autenticacaoRoutes.registerP)

app.post("/registerE", autenticacaoRoutes.registerE)

app.post("/logout", autenticacaoRoutes.logout)

app.listen(options.server.port, function () {
    console.log("Server running at port:" + options.server.port);
});


