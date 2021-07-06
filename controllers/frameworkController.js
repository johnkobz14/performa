const pool = require("../config/db");

// @desc Get Performance Cycle
// @route /api/pmp/framework
// @access private
exports.getCycle = async (req, res, next) => {
  try {
    const result = await pool.query(
      "SELECT * FROM public.performance_cycle_tbl order by cycle_cd"
    );
    return res.status(201).json({
      success: true,
      data: result.rows,
    });
  } catch (error) {
    return res.send(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @desc Get Cycle Period
// @route /api/pmp/framework
// @access private
exports.getCyclePeriod = async (req, res, next) => {
  try {
    const result = await pool.query(
      "SELECT * FROM public.cycle_period_tbl WHERE business_unit = $1 AND cycle_cd = $2",
      [req.params.business_unit, req.params.cycle_cd]
    );

    return res.status(201).json({
      success: true,
      data: result.rows,
    });
  } catch (error) {
    return res.send(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @desc Get Active Pillar
// @route /api/pmp/framework
// @access private
exports.getPillar = async (req, res, next) => {
  try {
    const result = await pool.query("SELECT * FROM public.active_pillar_vw");
    return res.status(201).json({
      success: true,
      data: result.rows,
    });
  } catch (error) {
    return res.send(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @desc Get Active Subcompentency
// @route /api/pmp/framework
// @access private
exports.getCompetency = async (req, res, next) => {
  try {
    const result = await pool.query(
      "SELECT * FROM public.active_competency_tbl WHERE pillar_cd = $1",
      [req.params.id]
    );
    return res.status(201).json({
      success: true,
      data: result.rows,
    });
  } catch (error) {
    return res.send(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @desc Get Active Subcompentency
// @route /api/pmp/framework
// @access private
exports.getSubCompetency = async (req, res, next) => {
  try {
    const result = await pool.query(
      "SELECT * FROM public.active_subcomp_tbl WHERE competency_cd = $1",
      [req.params.id]
    );
    return res.status(201).json({
      success: true,
      data: result.rows,
    });
  } catch (error) {
    return res.send(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @desc Get Cycle Period
// @route /api/pmp/framework
// @access private
exports.getEmpAssessment = async (req, res, next) => {
  try {
    const result = await pool.query(
      "SELECT * FROM public.user_assessment_tbl WHERE email = $1 AND framework_id = $2",
      [req.params.email, req.params.id]
    );

    return res.status(201).json({
      success: true,
      data: result.rows[0],
    });
  } catch (error) {
    return res.send(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @desc Add Employee Assessment data
// @route /api/pmp/framework
// @access private
exports.modEmpAssessment = async (req, res, next) => {
  const {
    email,
    framework_id,
    pr_rating1,
    pr_comment1,
    pr_rating2,
    pr_comment2,
    pr_rating3,
    pr_comment3,
    ap_rating,
    ap_comment,
  } = req.body;

  try {
    const exists = await pool.query(
      "SELECT * FROM public.user_assessment_tbl WHERE email = $1 AND framework_id = $2",
      [email, framework_id]
    );

    let result = [];

    if (exists.rows.length === 0) {
      //Create new Data

      result = await pool.query(
        "INSERT INTO public.user_assessment_tbl(email, framework_id, pr_rating1, pr_comment1, pr_rating2, pr_comment2, pr_rating3, pr_comment3, ap_rating, ap_comment) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *",
        [
          email,
          framework_id,
          pr_rating1,
          pr_comment1,
          pr_rating2,
          pr_comment2,
          pr_rating3,
          pr_comment3,
          ap_rating,
          ap_comment,
        ]
      );
    } else {
      //Update existing Data

      result = await pool.query(
        "UPDATE public.user_assessment_tbl SET pr_rating1 = $1, pr_comment1 = $2, pr_rating2 = $3, pr_comment2 = $4, pr_rating3 = $5, pr_comment3 = $6, ap_rating= $7, ap_comment = $8 WHERE email = $9 and framework_id = $10 RETURNING *",
        [
          pr_rating1,
          pr_comment1,
          pr_rating2,
          pr_comment2,
          pr_rating3,
          pr_comment3,
          ap_rating,
          ap_comment,
          email,
          framework_id,
        ]
      );
    }

    return res.status(201).json({
      success: true,
      data: result.rows[0],
    });
  } catch (error) {
    return res.send(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @desc Edit Employee Assessment data
// @route /api/pmp/framework
// @access private
exports.editEmpAssessment = async (req, res, next) => {
  const {
    email,
    framework_id,
    pr_rating1,
    pr_comment1,
    pr_rating2,
    pr_comment2,
    pr_rating3,
    pr_comment3,
    ap_rating,
    ap_comment,
  } = req.body;

  try {
    const result = await pool.query(
      "UPDATE public.user_assessment_tbl SET pr_rating1 = $1, pr_comment1 = $2, pr_rating2 = $3, pr_comment2 = $4, pr_rating3 = $5, pr_comment3 = $6, ap_rating= $7, ap_comment = $8 WHERE email = $9 and framework_id = $10 RETURNING *",
      [
        pr_rating1,
        pr_comment1,
        pr_rating2,
        pr_comment2,
        pr_rating3,
        pr_comment3,
        ap_rating,
        ap_comment,
        email,
        framework_id,
      ]
    );

    return res.status(201).json({
      success: true,
      data: result.rows,
    });
  } catch (error) {
    return res.send(500).json({
      success: false,
      error: "Server Error",
    });
  }
};
