import * as http from "http";
import * as url from "url";
import * as express from "express";
import * as bodyParser from "body-parser";

import {AppPrincipal} from "./srv/appprincipal";

const PORT_HTTP = 8080;

let app = express();
let appCommande = new AppPrincipal();

//middleware qui trace des requetes recues
app.use((req, res, next) => {
    appCommande.ecrireLog(url.parse(req.url).pathname);
    next();
});

// Configuration
app.use(bodyParser.urlencoded({ extended: true })); //encodage UTF8
app.use(bodyParser.json()); //pour les ressources json
app.use(express.static(__dirname)); //gestion des fichiers statics

// Routes
//liste des clients
app.get('/api/listeclient', (req, res) => {
    appCommande.listerLesClients(res);
});

//gestion d'un client
app.route('/api/client')
    .get((req, res) => {
        appCommande.ecrireLog("req get client ")
    })
    .post()
    .put()
    .delete();

//gestion de la page non trouvée
app.use(function (req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Page introuvable !')
});

//ecoute sur le port http
app.listen(PORT_HTTP, function () {
    appCommande.ecrireLog("Ecoute serveur Express sur le port " + PORT_HTTP);
});

export var App = app;