const express = require("express");
const {
	getAlbums,
	getAlbumById,
	createAlbum,
	updateAlbum,
	deleteAlbum,
} = require("../queries/albums.queries.js");

const albums = express.Router();

albums.get("/", async (req, res) => {
	try {
		const albums = await getAlbums();
		res.status(200).json(albums);
	} catch (error) {
		res.status(404).json({error: `Album with id: ${id} not found` });
	}
});

albums.get("/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const album = await getAlbumById(id);
		res.status(200).json(album);
	} catch (error) {
		res.status(404).json({ error: `Album with id: ${id} not found`  });
	}
});
albums.post("/", async (req, res) => {
	try {
		const newAlbum = await createAlbum(req.body);
		res.status(200).json(newAlbum);
	} catch (error) {
		res.status(400).json({ error: "Bad request" });
	}
});
albums.put("/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const updatedAlbum = await updateAlbum(id, req.body);
		res.status(200).json(updatedAlbum);
	} catch (error) {
		res.status(404).json({ error: `Album with id: ${id} not found` });
	}
});

albums.delete("/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const deletedAlbum = await deleteAlbum(id);
		res.status(200).json(deletedAlbum);
	} catch (error) {
		res.status(404).json({ error: `Album with id: ${id} not found`  });
	}
});
module.exports = albums;
