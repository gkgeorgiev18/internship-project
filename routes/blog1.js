const express = require("express");
const router = express.Router();

router.get("/blog1", function(req, res) {
    res.render("blog1");
});

module.exports = router;