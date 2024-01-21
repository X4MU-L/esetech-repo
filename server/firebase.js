const admin = require('firebase-admin');
const serviceAccount = require('./service_account.json');

const codingChallenge = admin.initializeApp(
  {
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://estech-coding-challenge.firebaseio.com',
  },
  'esetech-coding-challenge'
);

const db = codingChallenge.firestore();

module.exports = {
  db,
  admin: codingChallenge,
};
