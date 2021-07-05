const express = require("express");
const router = express.Router();
const {
  getCycle,
  getUserPillar,
} = require("../controllers/frameworkController");

router.route("/cycle").get(getCycle);

router.route("/:id").get(getUserPillar);

module.exports = router;
