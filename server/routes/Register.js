const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config")
const { Register } = require('../models');
const { response } = require("express");


const verifyToken = (req, res, next) => {
    const token = req.headers['token'];
    try {
        //verify token
        const data = jwt.verify(token, config.SECERETKEY);
        next();

    } catch (ex) {
        res.send("invalid token");
    }
}
router.get("/allReporter", verifyToken, (req, res) => {
    const allReporter = Register.findAll().then(reporter => {
        console.log(reporter);
        res.send("getting all Reporter");
    });
});

router.post("/createNews",verifyToken,(req,res)=>{
   res.send("creating post");
   console.log("creating post");
});


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
    const payload = email;
    if (!user) {
        res.json({ error: "User does not exit" });
    }
    bcrypt.compare(password, user.password).then((match) => {
        if (!match) {
            // res.json({ error: "Wrong user name and password" })
            res.sendStatus(403);
        }
        else {
            jwt.sign({ payload }, config.SECERETKEY, (err, token) => {
                if (err) {
                    res.sendStatus(403);
                }
                else {
                    res.json({
                        token
                    })
                }
            })
        }
    })
})
module.exports = router;
