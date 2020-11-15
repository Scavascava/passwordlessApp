
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
    response.sendFile(__dirname + "/" + "HTMLPage1.html");

    const cyberusKeyButton = new CyberusKeyWidget({
        clientId: 'KfnZprBj8RjRXer0SxCXuljueMxyS0MF',
        // Use your redirect URI.
        redirectUri: 'https://passwordless-765d4.web.app',
        fullOpenIdLogin: true
    });

    cyberusKeyButton.create('cyberus_login');
}



module.exports = {
    kupa,
    dupa
}


