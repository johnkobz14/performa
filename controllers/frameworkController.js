const pool = require("../config/db");

// @desc Get Performance Cycle
// @route /api/pmp/framework
// @access private
exports.getCycle = async (req, res, next) => {
  try {
    const cycle = await pool.query(
      "SELECT * FROM public.performance_cycle_tbl order by cycle_cd"
    );
    return res.status(201).json({
      success: true,
      data: cycle.rows,
    });
  } catch (error) {
    return res.send(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @desc Get user pillar
// @route /api/pmp/framework
// @access private
exports.getUserPillar = async (req, res, next) => {
  try {
    const userPillar = await pool.query(
      "SELECT * FROM public.user_info_cycle_xref_vw WHERE email = $1",
      [req.params.id]
    );
    return res.status(201).json({
      success: true,
      data: userPillar.rows,
    });
  } catch (error) {
    return res.send(500).json({
      success: false,
      error: "Server Error",
    });
  }
};
