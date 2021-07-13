const express = require("express");
const router = express.Router();

router.get("/", function(req, res) {
    res.render("blog1");
});

module.exports = router;