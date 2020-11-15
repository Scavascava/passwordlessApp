const express = require('express');
const path = require('path');
const cyberus = require('./mainCyberus.js')

var passport = require('passport');
OAuth2Strategy = require('passport-oauth2');

//import * as passport from 'passport'
//import * as OAuth2Strategy from 'passport-oauth2'

//OAuth2 = require('oauth').OAuth2

//import * as express from 'express';
//import * as path from 'path';
//import * as cyberus from './mainCyberus.js';


var app = express();


//app.use(express.static(path.join(__dirname, 'public')))
//app.use(express.static('public'))
app.use(express.static('.'))
app.get('/', function (req, res) {
    res.send('Hello World');
})

app.get('/index.html', function (req, res) {
    //res.sendFile(__dirname + "/public/" + "HTMLPage1.html");
    res.sendFile(__dirname + "/" + "HTMLPage1.html");
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})

var clientId = 'KfnZprBj8RjRXer0SxCXuljueMxyS0MF'
var clientSecret = '68f4d683-262d-4685-8fc2-6a20ea4bbba0'



passport.use('oauth2', new OAuth2Strategy({
    authorizationURL: 'https://api.cyberuskey.com/api/v2/authenticate',
    tokenURL: 'https://api.cyberuskey.com/api/v2/tokens',
    clientID: clientId,
    clientSecret: clientSecret,
    //callbackURL: 'http://localhost:8081/dupa',
    customHeaders: { 'Authorization': 'Basic ' + Buffer.from(clientId + ':' + clientSecret).toString('base64') },
},
    function (accessToken, refreshToken, profile, done) {

    }
));


app.get('/kupa', cyberus.kupa)
app.get('/dupa', cyberus.dupa)