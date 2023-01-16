"use strict";
const express = require("express");
const options = require("./config/options.json");
/** @todo Completar */
const empresasRoutes = require("./routes/empresasRoutes");
const profissionaisRoutes = require("./routes/profissionaisRoutes");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("www"));

// Empresas
app.get("/empresa", empresasRoutes.getEmpresas);

// Profissionais
app.get("/profissionais", profissionaisRoutes.getProfissionais);

app.listen(options.server.port, function () {
    console.log("Server running at port:" + options.server.port);
});