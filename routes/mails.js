var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

const MongoClient = require('mongodb').MongoClient;
const URL = "mongodb://localhost:27017/";
const DB_NAME = 'verify_mail';
//
MongoClient.connect(URL, function(err, db) {
    if (err) throw err;
    var dbo = db.db(DB_NAME);

    dbo.collection("mailData").find({isSent: true }).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
    });
    db.close();
});



router.get('/',function (req, res) {
    MongoClient.connect(URL, function (err, db) {

        if (err) throw err;
        let dbo = db.db(DB_NAME);

        dbo.collection("mailData").find({}).toArray(async function (err, data) {
            if (err) throw err;
            res.send(data);
            // res.send('hello world');
        });

        db.close();
    });
});

router.get('/get_sent_mail',function (req, res) {
    MongoClient.connect(URL, function (err, db) {

        if (err) throw err;
        let dbo = db.db(DB_NAME);

        dbo.collection("mailData").find({isSent: true}).toArray(async function (err, data) {
            if (err) throw err;
            res.send(data);
        });

        db.close();
    });
});


module.exports = router;
