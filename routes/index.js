var express = require('express');
var router = express.Router();




const MongoClient = require('mongodb').MongoClient;
const URL = "mongodb://localhost:27017/";
const DB_NAME = 'verify_mail';
//
// MongoClient.connect(URL, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db(DB_NAME);
//
//    dbo.collection("mailData").find({verify: false }).toArray(function(err, result) {
//     if (err) throw err;
//      console.log(result);
//   });
//   db.close();
// });


router.post('/get_users',function(req, res) {
    MongoClient.connect(URL, function (err, db) {

        if (err) throw err;
        let dbo = db.db(DB_NAME);

        dbo.collection("user").find({}).toArray(async function (err, data) {
           if (err) throw err;
           res.send(data);
        });

        db.close();
    });

});


router.post('/get_verify_mail',function (req, res) {
    MongoClient.connect(URL, function (err, db) {

        if (err) throw err;
        let dbo = db.db(DB_NAME);

        dbo.collection("mailData").find({verify: true}).toArray(async function (err, data) {
            if (err) throw err;
            res.send(data);
        });

        db.close();
    });
});

router.post('/get_sent_mail',function (req, res) {
    MongoClient.connect(URL, function (err, db) {

        if (err) throw err;
        let dbo = db.db(DB_NAME);

        dbo.collection("mailData").find({verify: false}).toArray(async function (err, data) {
            if (err) throw err;
            res.send(data);
        });

        db.close();
    });
});
//
router.get('/',function(req, res, next) {
  res.render('index',
      { title: 'Express'

      });
});



module.exports = router;
