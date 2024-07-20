const express = require("express");
const songs = express.Router();
const { getSongs, getSong, updateSong } = require("../queries/songs.queries");

songs.get("/", async (req, res) => {
	try {
		const songs = await getSongs();
		res.status(200).json(songs);
	} catch (error) {
		throw error;
	}
});

songs.get("/:id", async (req, res) => {
	const { id } = req.params;
	try {
		const song = await getSong(id);
		res.status(200).json(song);
	} catch (error) {
		res.status(404).json({ error: `song with id: ${id} not found` });
	}
});

songs.put("/:id", async (req, res) => {
	const { id } = req.params;
	try {
		const updatedSong = await updateSong(id, req.body);
		res.status(200).json(updatedSong);
	} catch (error) {
		res.status(404).json({ error: `song with id: ${id} not found` });
	}
});

module.exports = songs;
