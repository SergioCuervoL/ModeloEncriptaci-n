var crypto = require('crypto');

var sha1 = crypto.createHash('sha1').update('Sergio').digest('hex');
console.log(sha1);

var sha256 = crypto.createHash('sha3').update('Sergio').digest('hex');
console.log(sha256);
