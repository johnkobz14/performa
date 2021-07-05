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
    const result = await pool.query("SELECT * FROM public.active_subcomp_tbl");
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
