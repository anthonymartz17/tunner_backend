const db = require("../db/dbConfig");

async function getPlaylists() {
	try {
		const playlists = await db.any(
			"SELECT playlists.*, COUNT(playlist_songs.song_id) AS tracks FROM playlists LEFT JOIN playlist_songs ON playlists.id = playlist_songs.playlist_id GROUP BY playlists.id;"
		);
		return playlists;
	} catch (error) {
		throw error;
	}
}

async function getPlaylistById(id) {
	try {
		const playlist = await db.one("SELECT * FROM playlists WHERE id = $1", id);
		return playlist;
	} catch (error) {
		throw error;
	}
}

async function createPlaylist({ name, user_id, description, cover_img }) {
	try {
		const newPlaylist = await db.one(
			"INSERT INTO playlists (name, user_id, description, cover_img) VALUES ($1, $2, $3,$4) RETURNING *",
			[name, user_id, description, cover_img]
		);
		return newPlaylist;
	} catch (error) {
		throw error;
	}
}

async function updatePlaylist(id, { name, description, cover_img }) {
	try {
		const updatedPlaylist = await db.one(
			"UPDATE playlists SET name = $1, description = $2 , cover_img = $3 WHERE id = $4 RETURNING *",
			[name, description, cover_img, id]
		);
		return updatedPlaylist;
	} catch (error) {
		throw error;
	}
}

async function deletePlaylist(id) {
	try {
		const deletedPlaylist = await db.one(
			"DELETE FROM playlists WHERE id = $1 RETURNING *",
			id
		);
		return deletedPlaylist;
	} catch (error) {
		throw error;
	}
}

module.exports = {
	getPlaylists,
	getPlaylistById,
	createPlaylist,
	updatePlaylist,
	deletePlaylist,
};
