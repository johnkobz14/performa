const pool = require("../config/db"); 

// @desc Get current user
// @route /api/pmp/users
// @access private
exports.getUser = async (req, res, next) => {
try {
    const user = await pool.query("SELECT * FROM user_info_tbl WHERE email = $1", [req.params.id]);
    // const user = await pool.query("SELECT * FROM user_info_tbl");
    return res.status(201).json({
        success: true, 
        data: user.rows
    });

} catch (error) {
    return res.send(500).json({
        success: false,
        error: "Server Error"
    });
    }
}