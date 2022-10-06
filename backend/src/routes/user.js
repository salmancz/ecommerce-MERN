const express = require("express");
const { signup } = require("../controllers/user");
const router = express.Router();

router.post("/signin", (req, res) => {}); // end of router.post

router.post("/signup", signup);

module.exports = router;
