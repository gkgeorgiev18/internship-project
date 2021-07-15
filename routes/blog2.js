const express = require("express");
const router = express.Router();

router.get("/blog2", function(req, res) {
    res.render("blog2");
});

module.exports = router;