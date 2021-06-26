const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./models");

// parse application/json

app.use(express.json());
app.use(cors());

//Router

const newsBlog_router = require("./routes/newsBlog-routes");
app.use("/newsBlogs", newsBlog_router);

const userRouter = require("./routes/User");
app.use("/", userRouter);
const myTrendStateRoutes = require("./routes/trend-state-routes");
app.use("/trendState", myTrendStateRoutes);

db.sequelize.sync({ force: false, alter: true }).then(() => {
  app.listen("3001");
});
