const express = require("express");
const router = express.Router();
const sql = require("mssql/msnodesqlv8");
const { config } = require("../db/config");

router.get("/users", async(req, res) => {
    try {
        let connection = await sql.connect(config);
        const users = await connection.request().query(`SELECT * FROM Users`);
        console.log(users.recordset);
        res.render("usersList", { users: users.recordset });
    } catch {}
});

module.exports = router;