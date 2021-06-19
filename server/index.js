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

const myTrendStateRoutes = require("./routes/trend-state-routes");
app.use("/trendState", myTrendStateRoutes);

db.sequelize.sync({ force: false }).then(() => {
  app.listen("3001", () => {
    console.log("server started at port 3001......");
  });
});
