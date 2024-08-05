const db = require("../db/dbConfig");
async function getSongs() {
	try {
		const songs = await db.any("SELECT * FROM songs");
		return songs;
	} catch (error) {
		throw error;
	}
}

async function getSong(id) {
	try {
		const song = await db.one("SELECT * FROM songs WHERE id = $1", id);

		return song;
	} catch (error) {
		throw error;
	}
}
const createSong = async ({
	artist_id,
	album_id,
	name,
	artist,
	album,
	duration,
}) => {
	try {
		const newSong = await db.one(
			"INSERT INTO songs (artist_id, album_id, name, artist, album, duration) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *",
			[artist_id, album_id, name, artist, album, duration]
		);
		return newSong;
	} catch (error) {
		throw error;
	}
};

async function updateSong(
	id,
	{ artist_id, album_id, name, artist, album, duration }
) {
	try {
		const updatedSong = await db.one(
			"UPDATE songs SET artist_id = $1, album_id = $2, name = $3, artist = $4, album = $5, duration = $6   WHERE id = $7 RETURNING *",
			[artist_id, album_id, name, artist, album, duration, id]
		);
		return updatedSong;
	} catch (error) {
		throw error;
	}
}

async function deleteSong(id) {
	try {
		const deletedSong = await db.one(
			"DELETE FROM songs WHERE id = $1 RETURNING *",
			id
		);
		return deletedSong;
	} catch (error) {
		throw error;
	}
}

module.exports = { getSongs, getSong, createSong, updateSong, deleteSong };
