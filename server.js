
'use strict';
var http = require('http');
var port = process.env.PORT || 1337;
var fs = require('fs');
var passport = require('passport');


fs.readFile('./HTMLPage1.html', function (err, html) {

    if (err) throw err;

    http.createServer(function (req, res) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(html);
        res.end('Hello World\n');
    }).listen(port);

});

/*
passport.use('oauth2', new OAuth2Strategy({
    authorizationURL: 'https://api.cyberuskey.com/api/v2/authenticate',
    tokenURL: 'https://api.cyberuskey.com/api/v2/tokens',
    clientID: 'YOUR_CLIENT_ID',
    clientSecret: 'YOUR_CLIENT_SECRET',
    callbackURL: 'http://your-api.com/auth/callback',
    customHeaders: { 'Authorization': 'Basic ' + Buffer.from(clientID + ':' + clientSecret).toString('base64') },
},
    function (accessToken, refreshToken, profile, done) {

    }
));
*/

