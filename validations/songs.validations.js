const checkName = (req, res, next) => {
	if (!req.body.name) {
		res.status(400).json({ error: "Name is required" });
	}
	return next();
};
const checkArtist = (req, res, next) => {
	if (!req.body.artist) {
		res.status(400).json({ error: "Artist is required" });
	}
	return next();
};
const checkBoolean = (req, res, next) => {
	const { is_favorite } = req.body;
	if (
		typeof is_favorite === "boolean" ||
		is_favorite === "true" ||
		is_favorite === "false" ||
		is_favorite === undefined
	) {
		return next();
	} else {
		res.status(400).json({ error: "is_favorite must be a boolean" });
	}
};
