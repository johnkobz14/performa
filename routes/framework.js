const express = require("express");
const router = express.Router();
const {
  getLanding,
  getCycle,
  getPillar,
  getCompetency,
  getSubCompetency,
  getCyclePeriod,
  getEmpAssessment,
  modEmpAssessment,
} = require("../controllers/frameworkController");

router.get("/").get(getLanding);
router.route("/cycle").get(getCycle);
router.route("/pillar").get(getPillar);
router.route("/competency/:id").get(getCompetency);
router.route("/subcompetency/:id").get(getSubCompetency);
router.route("/cycleperiod/:business_unit/:cycle_cd").get(getCyclePeriod);
router.route("/empassessment/:email/:id").get(getEmpAssessment);

router.route("/empassessment/modify").put(modEmpAssessment);

module.exports = router;
