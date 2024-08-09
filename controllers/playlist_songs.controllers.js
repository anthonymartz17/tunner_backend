const express = require("express");
const playlistSongs = express.Router();

const {
	addSongToPlaylist,
	removeSongFromPlaylist,
	getSongsInPlaylist,
} = require("../queries/playlist_songs.queries");

// Get all songs in a playlist
playlistSongs.get("/:playlist_id/songs", async (req, res) => {
	try {
		const { playlist_id } = req.params;
		const songs = await getSongsInPlaylist(playlist_id);
		res.status(200).json(songs);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

// Add a song to a playlist
playlistSongs.post("/:playlist_id/songs", async (req, res) => {
	try {
		const { song_id } = req.body;
		const addedSong = await addSongToPlaylist(req.params.playlist_id, song_id);
		res.status(201).json(addedSong);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

// Remove a song from a playlist
playlistSongs.delete("/:playlist_id/songs/:song_id", async (req, res) => {
  const { playlist_id, song_id } = req.params;
	try {
		const removedSong = await removeSongFromPlaylist(playlist_id, song_id);
		res.status(200).json(removedSong);
	} catch (error) {
		res.status(404).json({ error: `Song with id: ${song_id} not found.` });
	}
});

module.exports = playlistSongs;
