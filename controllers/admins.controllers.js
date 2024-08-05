const express = require("express");
const admins = express.Router();

const {
  getAdmins,
  createAdmin,
  getAdminById,
  updateAdmin,
  deleteAdmin,
} = require("../queries/admins");

// Get all admins
admins.get("/", async (req, res) => {
  try {
    const adminUsers = await getAdmins();
    res.status(200).json(adminUsers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a new admin
admins.post("/", async (req, res) => {
  try {
    const newAdmin = await createAdmin(req.body);
    res.status(201).json(newAdmin);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get an admin by ID
admins.get("/:id", async (req, res) => {
  try {
    const adminUser = await getAdminById(req.params.id);
    res.status(200).json(adminUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update an admin by ID
admins.put("/:id", async (req, res) => {
  try {
    const updatedAdmin = await updateAdmin(req.params.id, req.body);
    res.status(200).json(updatedAdmin);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete an admin by ID
admins.delete("/:id", async (req, res) => {
  try {
    const deletedAdmin = await deleteAdmin(req.params.id);
    res.status(200).json(deletedAdmin);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = admins;
