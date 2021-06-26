const jwt = require("jsonwebtoken");
const config = require("../SecretKey")
const verifyToken = (req, res, next) => {
    const token = req.header('token');

    if (!token) return res.json({ error: "token is missing" });
    try {
        const validToken = jwt.verify(token, config.SECERETKEY);

        if (validToken) {
            return next();
        }
    }
    catch (err) {
        return res.json({ error: "invalid token" });
    }
};

module.exports = { verifyToken };
