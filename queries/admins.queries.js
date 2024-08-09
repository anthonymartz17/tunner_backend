const db = require("../db/dbConfig");

async function getAdmins() {
  try {
    const admins = await db.any("SELECT * FROM admins");
    return admins;
  } catch (error) {
    throw error;
  }
}

async function createAdmin({ email, uid }) {
  try {
    const newAdmin = await db.one(
      "INSERT INTO admins (email, uid) VALUES ($1, $2) RETURNING *",
      [email, uid]
    );
    return newAdmin;
  } catch (error) {
    throw error;
  }
}

async function getAdminById(id) {
  try {
    const admin = await db.one("SELECT * FROM admins WHERE id = $1", id);
    return admin;
  } catch (error) {
    throw error;
  }
}

async function updateAdmin(id, { name }) {
  try {
    const updatedAdmin = await db.one(
      "UPDATE admins SET name = $1, updated_at = CURRENT_TIMESTAMP WHERE id = $2 RETURNING *",
      [name, id]
    );
    return updatedAdmin;
  } catch (error) {
    throw error;
  }
}

async function deleteAdmin(id) {
  try {
    const deletedAdmin = await db.one(
      "DELETE FROM admins WHERE id = $1 RETURNING *",
      id
    );
    return deletedAdmin;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAdmins,
  createAdmin,
  getAdminById,
  // updateAdmin,
  deleteAdmin,
};
