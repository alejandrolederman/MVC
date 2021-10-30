const express= require("express");
const app = express();
//
const log = require("./utils");
const ENDPOINTS = require("./endpoints")
const PAGE_CTRL = require("./ctrl/pages_Ctrl")

const port = process.env.PORT || 3000;

app.get(ENDPOINTS.INDEX, PAGE_CTRL.index )

app.get(ENDPOINTS.ABOUT, PAGE_CTRL.about)

app.get(ENDPOINTS.SERVICES, PAGE_CTRL.servise);


app.listen (port, ()=>{

    log("esta corriendo el servidor")

});