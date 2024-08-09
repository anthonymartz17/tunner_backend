const admin = require("../firebase-admin");

async function validateToken(req, res, next) {
	const token = req.header.authorization?.split("Bearer ")[1];

	if (!token) {
		res.status(401).json({ error: "Access Denied. Missing token" });
	}
	try {
		try {
			const decodedToken = await admin.auth().verifyIdToken(token);
			req.user = decodedToken;

			next();
		} catch (error) {
			return res.status(403).json({ error: "Unauthorized request" });
		}
	} catch (error) {}
}

module.exports = { validateToken };
