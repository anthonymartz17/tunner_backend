const express = require("express");

const admin = express.Router()

const {getAdminById,updateAdmin,deleteAdmin} = require("../queries/admin.queries.js")