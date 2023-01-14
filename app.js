"use strict";
const express = require("express");
const options = require("./config/options.json");
/** @todo Completar */
const empresasRoutes = require("./routes/empresasRoutes");
const portfoliosRoutes = require("./routes/portfoliosRoutes");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("www"));

// Empresas
app.get("/empresa", empresasRoutes.getEmpresas);

// Countries

app.listen(options.server.port, function () {
    console.log("Server running at port:" + options.server.port);
});