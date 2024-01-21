var express = require('express');
const { db, admin } = require('../firebase');
var router = express.Router();

/* GET users listing. */
router.post('/', async function (req, res, next) {
  try {
    const { uid } = await admin.auth().createUser({
      email: req.body.email,
      password: req.body.password,
    });

    const newValues = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
    };
    const result = await db.collection('users').doc(uid).set(newValues);
    res.status(200).json({
      status: 'success',
      message: 'succesfully created an new user',
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 'error',
      message: 'error creating user',
    });
    next(error);
  }
});

module.exports = router;
