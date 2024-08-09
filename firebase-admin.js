const admin = require("firebase-admin");
const credentials = require("./credentials-firebase.json");

admin.initializeApp({
	credential: admin.credential.cert(credentials),
});

module.exports = admin;
