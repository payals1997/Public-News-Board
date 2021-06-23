const express = require("express");
const router = express.Router();
const { Register } = require('../models');
const { response } = require("express");



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

module.exports = router;