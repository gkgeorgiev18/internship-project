const express = require("express");
const router = express.Router();

router.get("/blog3", function(req, res) {
    res.render("blog3");
});

module.exports = router;