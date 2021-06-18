const express = require("express");
const router = express.Router();
const { NewsBlogs } = require("../models");

//Finding all data
router.get("/", async (req, resp) => {
  const TableData = await NewsBlogs.findAll();
  resp.json(TableData);
});

// creating data in newsblog table
router.post("/", async (req, resp) => {
  const row = req.body;
  await NewsBlogs.create(row);
  resp.json(row);
});

// Finding data on the basis of category
router.get("/category/:category", async (req, resp) => {
  const TableData = await NewsBlogs.findAll({
    where: {
      category: req.params.category,
    },
  });
  resp.json(TableData);
});

// Finding data on the basis of newsCity
router.get("/newsCity/:newsCity", async (req, resp) => {
  const TableData = await NewsBlogs.findAll({
    where: {
      newsCity: req.params.newsCity,
    },
  });
  resp.json(TableData);
});

// Getting all the categories names
router.get("/allCategory", async (req, resp) => {
  const TableData = await NewsBlogs.findAll({
    attributes: ["category"],
    group: ["category"],
  });
  resp.json(TableData);
});

// Getting all the newsCity names
router.get("/allNewsCity", async (req, resp) => {
  const TableData = await NewsBlogs.findAll({
    attributes: ["newsCity"],
    group: ["newsCity"],
  });
  resp.json(TableData);
});

module.exports = router;
