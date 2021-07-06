const express = require("express");
const router = express.Router();
const {
  getCycle,
  getPillar,
  getCompetency,
  getSubCompetency,
  getCyclePeriod,
  getEmpAssessment,
  addEmpAssessment,
  editEmpAssessment,
} = require("../controllers/frameworkController");

router.route("/cycle").get(getCycle);
router.route("/pillar").get(getPillar);
router.route("/competency/:id").get(getCompetency);
router.route("/subcompetency/:id").get(getSubCompetency);
router.route("/cycleperiod/:business_unit/:cycle_cd").get(getCyclePeriod);
router.route("/empassessment/:email/:id").get(getEmpAssessment);

router.route("/empassessment/add").post(addEmpAssessment);
router.route("/empassessment/edit").put(editEmpAssessment);

module.exports = router;
