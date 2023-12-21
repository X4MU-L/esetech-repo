const admin = require("firebase-admin");
const serviceAccount = require("./service_account.json");

const codingChallenge = admin.initializeApp(
  {
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://esetech-coding-challenge.firebaseio.com",
  },
  "esetech-coding-challenge"
);
exports.db = codingChallenge.firestore();
