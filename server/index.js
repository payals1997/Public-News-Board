const express = require("express");
const app = express();

app.use(express.json());

const db = require("./models");
const cors = require("cors");
var corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

//Routers

const newsBlog_router = require("./routes/newsBlog-routes");
app.use("/newsBlogs", newsBlog_router);

db.sequelize.sync({ force: false }).then(() => {
  app.listen("3001", () => {
    console.log("server started at port 3001......");
  });
});
