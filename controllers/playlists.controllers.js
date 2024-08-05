const express = require("express");
const playlists = express.Router();

const {
	getPlaylists,
	getPlaylistById,
	createPlaylist,
	updatePlaylist,
	deletePlaylist,
	getSongsInPlaylist,
	addSongToPlaylist,
	removeSongFromPlaylist,
} = require("../queries/playlists.queries");

// Get all playlists
playlists.get("/", async (req, res) => {
	try {
		const allPlaylists = await getPlaylists();
		res.status(200).json(allPlaylists);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

// Get a playlist by ID
playlists.get("/:id", async (req, res) => {
	try {
		const playlist = await getPlaylistById(req.params.id);
		res.status(200).json(playlist);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

// Create a new playlist
playlists.post("/", async (req, res) => {
	try {
		const newPlaylist = await createPlaylist(req.body);
		res.status(200).json(newPlaylist);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

// Update a playlist by ID
playlists.put("/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const updatedPlaylist = await updatePlaylist(id, req.body);
		res.status(200).json(updatedPlaylist);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

// Delete a playlist by ID
playlists.delete("/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const deletedPlaylist = await deletePlaylist(id);
		res.status(200).json(deletedPlaylist);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

// Get all songs in a playlist
playlists.get("/:id/songs", async (req, res) => {
	try {
		const { id } = req.params;
		const songs = await getSongsInPlaylist(id);
		res.status(200).json(songs);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

// Add a song to a playlist
playlists.post("/:id/songs", async (req, res) => {
	try {
		const { song_id } = req.body;
		const addedSong = await addSongToPlaylist(req.params.id, song_id);
		res.status(201).json(addedSong);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

// Remove a song from a playlist
playlists.delete("/:id/songs/:song_id", async (req, res) => {
	try {
		const removedSong = await removeSongFromPlaylist(
			req.params.id,
			req.params.song_id
		);
		res.status(200).json(removedSong);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

module.exports = playlists;
