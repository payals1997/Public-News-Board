const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../SecretKey")
const { Register } = require('../models');
const { response } = require("express");
const { verifyToken } = require("../Middleware/AuthMiddleware");



router.post("/signup", async (req, res) => {

    const { name, email, password, city, phone, role } = req.body;
    bcrypt.hash(password, 10).then((hash) => {
        Register.create({
            name: name,
            email: email,
            password: hash,
            city: city,
            phone: phone,
            // isApproved: isApproved,
            role: role
        });
        res.json("SUCCESS");
        console.log(data)
    });
})

router.post("/signin", async (req, res) => {
    const { email, password } = req.body;
    const user = await Register.findOne({ where: { email: email } });
    const userId = user.id;
    const role = user.role;

    console.log(role);
    if (!user) res.json({ error: "User does not exit" });

    bcrypt.compare(password, user.password).then((match) => {
        if (!match) res.json({ error: "Wrong user name and password" })

        const token = jwt.sign({ userId }, config.SECERETKEY);
        res.json({ token: token, role: role });



    });
});
module.exports = router;