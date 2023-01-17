"use strict";
const express = require("express");
const express = require("express-session");
const options = require("./config/options.json");
/** @todo Completar */
const autenticacaoRoutes = require("./routes/autenticacaoRoutes");
const empresasRoutes = require("./routes/empresasRoutes");
const portfoliosRoutes = require("./routes/portfoliosRoutes");
const bodyParser = require("body-parser");
const { application } = require("express");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("www"));

// Empresas
app.get("/empresa", empresasRoutes.getEmpresas);

// Countries

//autenticacao
app.post("/auth", autenticacaoRoutes.autenticate())

app.listen(options.server.port, function () {
    console.log("Server running at port:" + options.server.port);
});