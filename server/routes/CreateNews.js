const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../SecretKey")
const { CreateNews } = require('../models');
const { response } = require("express");
const { verifyToken } = require("../Middleware/AuthMiddleware");

router.post("/createNews", verifyToken, async (req, res) => {
    const post = req.body;
    await CreateNews.create(post);
    res.json(post)

});
module.exports = router;