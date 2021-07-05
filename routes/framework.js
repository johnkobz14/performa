const express = require("express");
const router = express.Router();
const {
  getCycle,
  getPillar,
  getCompetency,
  getSubCompetency,
} = require("../controllers/frameworkController");

router.route("/cycle").get(getCycle);
router.route("/pillar").get(getPillar);
router.route("/competency/:id").get(getCompetency);
router.route("/subcompetency/:id").get(getSubCompetency);

module.exports = router;
