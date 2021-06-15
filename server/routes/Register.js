const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt")
const { Register } = require('../models');


router.post("/", async (req, res) => {

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
    });
})

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await Register.findOne({ where: { email: email } });

    if (!user) res.json({ error: "User does not exit" });

    bcrypt.compare(password, user.password).then((match) => {
        if (!match) res.json({ error: "Wrong user name and password" });

        res.json("You Logged In");

    })

})
module.exports = router;