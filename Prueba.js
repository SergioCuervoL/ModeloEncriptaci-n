var crypto = require('crypto');

async function sha256(message) {
    // encode as UTF-8
    const msgBuffer = new TextEncoder().encode(message);                    

    // hash the message
    const hashBuffer = crypto.createHash('sha1').update('Sergio').digest('hex');

    // convert ArrayBuffer to Array
    const hashArray = Array.from(new Uint8Array(hashBuffer));

    // convert bytes to hex string                  
    const hashHex = hashArray.map(b => ('00' + b.toString(16)).slice(-2)).join('');

    console.log(hashHex);

    return hashHex;
}

function start() {
    return sha256("Sergio Cuervo");
}


(async() => {
    console.log('before start');
  
    await start();
    
    console.log('after start');
  })();

