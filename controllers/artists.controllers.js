const express = require("express");
const {
	getArtists,
	getArtistById,
	createArtist,
	updateArtist,
	deleteArtist,
} = require("../queries/artists.queries.js");

const { validateToken } = require("../middlewares/auth.middleware.js");

const artists = express.Router();

artists.get("/", async (req, res) => {
	try {
		const artists = await getArtists();
		res.status(200).json(artists);
	} catch (error) {
		res.status(404).json({ error: `Artist with id: ${id} not found` });
	}
});

artists.get("/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const artist = await getArtistById(id);
		res.status(200).json(artist);
	} catch (error) {
		res.status(404).json({ error: `Artist with id: ${id} not found` });
	}
});
artists.post("/", validateToken, async (req, res) => {
	try {
		const newArtist = await createArtist(req.body);
		res.status(200).json(newArtist);
	} catch (error) {
		res.status(400).json({ error: "Bad request", error });
	}
});
artists.put("/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const updatedArtist = await updateArtist(id, req.body);
		res.status(200).json(updatedArtist);
	} catch (error) {
		res.status(404).json({ error: `Artist with id: ${id} not found` });
	}
});

artists.delete("/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const deletedArtist = await deleteArtist(id);
		res.status(200).json(deletedArtist);
	} catch (error) {
		res.status(404).json({ error: `Artist with id: ${id} not found` });
	}
});
module.exports = artists;
