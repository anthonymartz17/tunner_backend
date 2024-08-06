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

async function getSongsInPlaylist(playlist_id) {
	try {
		const songs = await db.any(
			`SELECT
         p.id AS playlist_id,
         p.name AS playlist_name,
         p.description AS playlist_description,
         p.cover_img AS playlist_cover_img,
         s.id AS song_id,
         s.artist_id AS artist_id,
         s.artist AS artist,
         s.album_id AS album_id,
         s.name AS song_name,
         s.album AS album,
         s.duration AS duration
            
       FROM
         playlists p
       JOIN
         playlist_songs ps
       ON
         p.id = ps.playlist_id
       JOIN
         songs s
       ON
         s.id = ps.song_id
       WHERE
         p.id = $1;`,
			playlist_id
		);
		if (songs.length === 0) {
			throw new Error("Playlist not found");
		}
		const playlist = {
			id: songs[0].playlist_id,
			name: songs[0].playlist_name,
			description: songs[0].playlist_description,
			cover_img: songs[0].playlist_cover_img,
			tracks: songs.length,
			songs: songs.map((item) => ({
				id: item.song_id,
				artist_id: item.artist_id,
				album_id: item.album_id,
				album: item.album,
				name: item.song_name,
				duration: item.duration,
				artist: item.artist,
			})),
		};

		return playlist;
	} catch (error) {
		throw error;
	}
}

async function addSongToPlaylist(playlist_id, song_id) {
	try {
		const addedSong = await db.one(
			"INSERT INTO playlist_songs (playlist_id, song_id) VALUES ($1, $2) RETURNING *",
			[playlist_id, song_id]
		);
		return addedSong;
	} catch (error) {
		throw error;
	}
}

async function removeSongFromPlaylist(playlist_id, song_id) {
	try {
		const removedSong = await db.one(
			"DELETE FROM playlist_songs WHERE playlist_id = $1 AND song_id = $2 RETURNING *",
			[playlist_id, song_id]
		);
		return removedSong;
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
	getSongsInPlaylist,
	addSongToPlaylist,
	removeSongFromPlaylist,
};
