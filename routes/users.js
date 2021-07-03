const express = require("express");
const router = express.Router();
const {getUsers} = require("../controllers/usersController");

router
.route("/:id")
.get(getUsers);

module.exports = router;