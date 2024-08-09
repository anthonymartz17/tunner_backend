const express = require("express");
const songs = express.Router();
const {
	getSongs,
	getSongsByAlbum,
	getSongsByArtist,
	getSong,
	createSong,
	updateSong,
	deleteSong,
} = require("../queries/songs.queries");

const {
	checkName,
	checkArtist,
	checkBoolean,
} = require("../middlewares/songs.middleware");

songs.get("/", async (req, res) => {
	try {
		const songs = await getSongs();
		res.status(200).json(songs);
	} catch (error) {
		throw error;
	}
});
songs.get("/artist/:artist_id", async (req, res) => {
	try {
		const { artist_id } = req.params;
		const songs = await getSongsByArtist(artist_id);
		res.status(200).json(songs);
	} catch (error) {
		throw error;
	}
});
songs.get("/album/:album_id", async (req, res) => {
	try {
		const { album_id } = req.params;
		const songs = await getSongsByAlbum(album_id);
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
const validations = [checkName, checkArtist, checkBoolean];
songs.post("/", validations, async (req, res) => {
	try {
		const createdSong = await createSong(req.body);
		res.status(200).json(createdSong);
	} catch (error) {
		res.status(400).json({ error: "server error creating song" });
	}
});

songs.put("/:id", validations, async (req, res) => {
	const { id } = req.params;
	try {
		const updatedSong = await updateSong(id, req.body);
		res.status(200).json(updatedSong);
	} catch (error) {
		res.status(404).json({ error: `song with id: ${id} not found` });
	}
});

songs.delete("/:id", async (req, res) => {
	const { id } = req.params;
	try {
		const deletedSong = await deleteSong(id);
		res.status(200).json(deletedSong);
	} catch (error) {
		res.status(404).json({ error: `song with id: ${id} not found` });
	}
});

module.exports = songs;
