const express = require("express");
const router = express.Router();
const sql = require("mssql/msnodesqlv8");
const { config } = require("../db/config");

router.get("/signin", function(req, res) {
    res.render("signin");
});

router.post("/signin", async function(req, res) {
    try {
        let loggedUserInfo = {};
        console.log(req.body);
        const pool = await sql.connect(config);
        const result = await pool
            .request()
            .input("Username", sql.VarChar, req.body.username)
            .input("IncommingPassword", sql.NVarChar, req.body.password)
            .output("VerifiedId", sql.Int)
            .output("UsernameOut", sql.VarChar)
            .execute("LoginUser");
        loggedUserInfo.id = result.output.VerifiedId;
        loggedUserInfo.username = result.output.UsernameOut;
        console.log(loggedUserInfo);
    } catch (e) {
        console.log(e);
        if (e instanceof sql.RequestError) {
            return displayError(
                res,
                "A database error has occured! Please try again later."
            );
        } else {}
    }

    res.redirect("signin");
});

module.exports = router;