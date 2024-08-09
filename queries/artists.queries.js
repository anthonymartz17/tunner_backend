const db = require("../db/dbConfig");

async function getArtists() {
	try {
		const artists = await db.any("SELECT * FROM artists ORDER BY created_at DESC");
		return artists;
	} catch (error) {
		throw error;
	}
}

async function getArtistById(id) {
	try {
		const artist = await db.one("SELECT * FROM artists WHERE id = $1", id);
		return artist;
	} catch (error) {
		throw error;
	}
}
async function createArtist({ name, genre, bio, cover_img,admin_id }) {
	try {
		const newArtist = await db.one(
			"INSERT INTO artists (name, genre, bio,cover_img,admin_id) VALUES ($1,$2,$3,$4,$5) RETURNING *",
			[name, genre, bio, cover_img,admin_id]
		);
		return newArtist;
	} catch (error) {
		throw error;
	}
}

async function updateArtist(id, { name, genre, bio }) {
	try {
		const updatedArtist = await db.one(
			"UPDATE artists SET name = $1, genre = $2, bio = $3 WHERE id = $4 RETURNING *",
			[name, genre, bio, id]
		);
		return updatedArtist;
	} catch (error) {
		throw error;
	}
}

async function deleteArtist(id) {
	try {
		const deletedArtist = await db.one(
			"DELETE FROM artists WHERE id = $1 RETURNING *",
			id
		);
		return deletedArtist;
	} catch (error) {
		throw error;
	}
}
module.exports = {
	getArtists,
	getArtistById,
	createArtist,
	updateArtist,
	deleteArtist,
};
