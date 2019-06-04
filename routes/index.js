var express = require('express');
var router = express.Router();




const MongoClient = require('mongodb').MongoClient;
const URL = "mongodb://localhost:27017/";
const DB_NAME = 'verify_mail';
MongoClient.connect(URL, function(err, db) {
  if (err) throw err;
  var dbo = db.db(DB_NAME);
  var mails = dbo.collection("user").find({}).toArray( async function(err, result) {
    if (err) throw err;
    // console.log(result);
  });

   dbo.collection("mailData").find({}).toArray(function(err, result) {
    if (err) throw err;
     // console.log(result);
  });
  db.close();
});

var mails = myFunction();
console.log(myFunction());

router.post('/get_users');
router.post('/get_verify_mail');
router.post('/get_sent_mail');
//
router.get('/',function(req, res, next) {
  res.render('index',
      { title: 'Express',
        mails: JSON.stringify(mails),
        users: 'users'

      });
});



module.exports = router;
