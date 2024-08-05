const express = require("express");
const users = express.Router();

const {
  getUsers,
	createUser,
	getUserById,
	deleteUser,
} = require("../queries/users.queries");

// Create a new user
users.get("/", async (req, res) => {
	try {
		const users = await getUsers();
		res.status(200).json(users);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});
users.post("/", async (req, res) => {
	try {
		const newUser = await createUser(req.body);
		res.status(201).json(newUser);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

// Get a user by ID
users.get("/:id", async (req, res) => {
	try {
		const user = await getUserById(req.params.id);
		res.status(200).json(user);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

// Update a user by ID
// users.put("/:id", async (req, res) => {
// 	try {
// 		const updatedUser = await updateUser(req.params.id, req.body);
// 		res.status(200).json(updatedUser);
// 	} catch (error) {
// 		res.status(500).json({ error: error.message });
// 	}
// });

// Delete a user by ID
users.delete("/:id", async (req, res) => {
	try {
		const deletedUser = await deleteUser(req.params.id);
		res.status(200).json(deletedUser);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

module.exports = users;
