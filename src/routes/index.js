const admin = require('firebase-admin')
const { Router}= require('express');
const router = Router();
var crypto = require('crypto');

var serviceAccount = require("../../proyectosapi-6708d-firebase-adminsdk-ps1gp-e321939a41.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://proyectosapi-6708d.firebaseio.com/'
});

const db = admin.database();

router.get('/', (req, res) => {
       res.render('index')
})

router.post('/new-contact', (req, res) => {
    var pass1 = crypto.createHash('sha1').update(req.body.firstname+' '+req.body.lastname).digest('hex');
    var pass256 = crypto.createHash('sha256').update(req.body.firstname+' '+req.body.lastname).digest('hex');
    var pass384 = crypto.createHash('sha384').update(req.body.firstname+' '+req.body.lastname).digest('hex');
    var pass512 = crypto.createHash('sha512').update(req.body.firstname+' '+req.body.lastname).digest('hex');
    const newContact = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        phone: req.body.phone,
        keysha1: pass1,
        keysha256: pass256,
        keysha384: pass384,
        keysha512: pass512
    }
    db.ref('contacts').push(newContact);
    res.redirect('/');
});

router.get('/delete-contact/:id', (req, res) => {
    db.ref('contacts/' + req.params.id).remove();
    res.redirect('/');
});

module.exports = router;



abcdef
defghi