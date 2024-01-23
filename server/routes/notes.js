var express = require('express');
const { db, admin } = require('../firebase');
var router = express.Router();

router.get('/', async function (req, res, next) {
  try {
    const notesSnapshot = await db.collection('notes').get();

    const notesData = notesSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.status(200).json({
      status: 'success',
      message: 'succesfully created an new note',
      data: notesData,
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

/* creat notes listing. */
router.post('/create_notes', async function (req, res, next) {
  try {
    const result = await db
      .collection('notes')
      .doc()
      .set({ ...req.body });
    res.status(200).json({
      status: 'success',
      message: 'succesfully created an new note',
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
