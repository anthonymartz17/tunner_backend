const db = require("../db/dbConfig");

async function getUsers() {
	try {
		const users = await db.any("SELECT * FROM users");
		return users;
	} catch (error) {
		throw error;
	}
}

async function createUser({ email, uid }) {
	try {
		const newUser = await db.one(
			"INSERT INTO users (email, uid) VALUES ($1, $2) RETURNING *",
			[email, uid]
		);
		return newUser;
	} catch (error) {
		throw error;
	}
}

async function getUserById(id) {
	try {
		const user = await db.one("SELECT * FROM users WHERE id = $1", id);
		return user;
	} catch (error) {
		throw error;
	}
}

async function updateUser(id, { name }) {
	try {
		const updatedUser = await db.one(
			"UPDATE users SET  name = $1, updated_at = CURRENT_TIMESTAMP WHERE id = $2 RETURNING *",
			[name, id]
		);
		return updatedUser;
	} catch (error) {
		throw error;
	}
}

async function deleteUser(id) {
	try {
		const deletedUser = await db.one(
			"DELETE FROM users WHERE id = $1 RETURNING *",
			id
		);
		return deletedUser;
	} catch (error) {
		throw error;
	}
}

module.exports = {
  getUsers,
	createUser,
	getUserById,
	// updateUser,
	deleteUser,
};
