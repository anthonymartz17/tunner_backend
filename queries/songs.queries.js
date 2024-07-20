const db = require("../db/dbConfig");
const getSongs = async () => {
	try {
		const songs = await db.any("SELECT * FROM songs");
		return songs;
	} catch (error) {
		throw error;
	}
};

const getSong = async (id) => {
	try {
		const song = await db.one("SELECT * FROM songs WHERE id = $1", id);

		return song;
	} catch (error) {
		throw error;
	}
};

const updateSong = async (id, { name, artist, album, time, is_favorite }) => {
	console.log("klk");
	try {
		const updatedSong = await db.one(
			"UPDATE songs SET name = $1, artist = $2, album = $3, time = $4, is_favorite = $5 WHERE id = $6 RETURNING *",
			[name, artist, album, time, is_favorite, id]
		);
		console.log(updatedSong, "k paso");
		return updatedSong;
	} catch (error) {
		throw error;
	}
};

module.exports = { getSongs, getSong, updateSong };
