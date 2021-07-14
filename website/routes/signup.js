const express = require("express");
const router = express.Router();
const sql = require("mssql/msnodesqlv8");
const { config } = require("../db/config");

let bodyParser = require("body-parser");

// Parse application/json
router.use(bodyParser.json());

// Parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: true }));

router.get("/signup", function(req, res) {
    res.render("signup");
});

router.post("/signup", async function(req, res) {
    try {
        console.log(req.body);
        //const crypto = require("crypto");
        //const sha256sum = crypto.createHash("sha256");
        //const passHashed = sha256sum.update(req.body.password).digest("hex");
        const pool = await sql.connect(config);
        const result = await pool
            .request()
            .input("username", sql.VarChar, req.body.username)
            .input("email", sql.VarChar, req.body.email)
            .input("firstName", sql.VarChar, req.body.firstName)
            .input("lastName", sql.VarChar, req.body.lastName)
            .input("passwordHash", sql.NVarChar, req.body.password)
            .query `INSERT INTO Users (username, email, firstName, lastName, passwordHash)
            VALUES (@username, @email, @firstName, @lastName, @passwordHash)`;
        console.log(result);
    } catch (e) {
        console.log(e);
        if (e instanceof sql.RequestError) {
            return displayError(
                res,
                "A database error has occured! Please try again later."
            );
        } else {}
    }

    res.redirect("signup");
});

module.exports = router;