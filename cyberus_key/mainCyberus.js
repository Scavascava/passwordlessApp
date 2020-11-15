
const CyberusKeyWidget = require('cyberuskey-widget').CyberusKeyWidget


/*
window.onload = function () {
    
    document.getElementById('login').addEventListener("click", function () {
        //console.log(JSON.stringify(product_array));
        console.log("AAAAAAAAAAAAAAAAAAAAAA");
    });
    
};
*/


const kupa = (request, response) => {
    response.sendFile(__dirname + "/" + "HTMLPage1.html");
    document.getElementById('login').addEventListener("click", function () {
        //console.log(JSON.stringify(product_array));
        console.log("AAAAAAAAAAAAAAAAAAAAAA");
    });
}


const dupa = (request, response) => {
    
    const cyberusKeyButton = new CyberusKeyWidget({
        clientId: 'KfnZprBj8RjRXer0SxCXuljueMxyS0MF',
        // Use your redirect URI.
        redirectUri: 'https://passwordless-765d4.web.app',
        fullOpenIdLogin: true
    });

    response.sendFile(__dirname + "/" + "HTMLPage1.html");


    cyberusKeyButton.create('login-button');

    /*
    document.getElementById('login').addEventListener("click", function () {
        cyberusKeyButton.create('login-button');
    });
    */

    
}



module.exports = {
    kupa,
    dupa
}


