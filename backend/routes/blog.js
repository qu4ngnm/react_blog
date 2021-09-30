const express = require("express");
const router = express.Router();
const { time } = require("../controller/blog.js");
router.get("/", time);

module.exports = router;
