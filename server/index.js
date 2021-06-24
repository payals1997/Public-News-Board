const express = require("express");
const cors = require("cors")
const app = express();
const db = require('./models')

// parse application/json
app.use(express.json())
app.use(cors());
//Router
const userRouter = require("./routes/User");
app.use("/", userRouter);

db.sequelize.sync({ force: true }).then(() => {
    app.listen(3001)
});