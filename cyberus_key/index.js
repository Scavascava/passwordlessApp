const express = require('express');
const path = require('path');

var passport = require('passport');
OAuth2Strategy = require('passport-oauth2');

var app = express();
app.use(express.static('.'))

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("App listening at http://%s:%s", host, port)
})

var clientId = 'KfnZprBj8RjRXer0SxCXuljueMxyS0MF'
var clientSecret = 'tajny klucz'


app.get('/', function (req, res) {
   
    res.sendFile(__dirname + "/" + "index.html");

    passport.use('oauth2', new OAuth2Strategy({
        authorizationURL: 'https://api.cyberuskey.com/api/v2/authenticate',
        tokenURL: 'https://api.cyberuskey.com/api/v2/tokens',
        clientID: clientId,
        clientSecret: clientSecret,
        customHeaders: { 'Authorization': 'Basic ' + Buffer.from(clientId + ':' + clientSecret).toString('base64') },
    },
        function (accessToken, refreshToken, profile, done) {

        }
    ));
})


