const express = require("express");
const { signup } = require("../controllers/auth");
const router = express.Router();

router.post("/signin", (req, res) => {}); // end of router.post

router.post("/signup", signup);

module.exports = router;
