const express = require("express");
const cors = require("cors")
const app = express();
const db = require('./models')

// parse application/json
app.use(express.json())
app.use(cors());
//Router
const regRouter = require("./routes/Register");
app.use("/auth", regRouter);

db.sequelize.sync({ force: false }).then(() => {
    app.listen(8080, () => {
        console.log("server is running on port 8080");
    });
});
