const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = require("./models");

//Routers




const newsBlog_router = require("./routes/newsBlog-routes");
app.use("/newsBlogs", newsBlog_router);

// const newsBlog_router1 = require("./routes/newsBlog-routes");
// app.use("/trendingNews", newsBlog_router1);


db.sequelize.sync({ force: false, alter: true }).then(() => {
  app.listen("3001", () => {
    console.log("server started at port 3001......");
  });
});
