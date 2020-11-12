import CyberusKeyWidget from 'cyberuskey-widget';
// JavaScript source code

document.getElementById('login').addEventListener("click", function () {
    //console.log(JSON.stringify(product_array));
    sendSearch(JSON.stringify({ searchData: product_array }));
});

const cyberusKeyButton = new CyberusKeyWidget({
    clientId: 'YOUR CLIENT ID',
    // Use your redirect URI.
    redirectUri: 'https://your-application.com/api/authorize',
    fullOpenIdLogin: true
});

cyberusKeyButton.create('cyberus_login');