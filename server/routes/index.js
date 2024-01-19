var express = require('express');
var { db } = require('../firebase');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  const collectionRef = db.collection('notes');
  if (collectionRef) {
    collectionRef
      .get()
      .then((snapshot) => {
        if (snapshot.empty) {
          console.log('No documents found in the collection.');
          return;
        }
        console.log(snapshot, 'snap');
        // Loop through each document
        snapshot.forEach((doc) => {
          console.log('Document ID:', doc.id);
          console.log('Document Data:', doc.data());
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  res.render('index', { title: 'Express' });
});

router.post('/create_notes', function (req, res, next) {});
module.exports = router;
