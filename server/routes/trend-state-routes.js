const express = require("express");
const router = express.Router();
const { NewsBlogs } = require("../models");

router.get("/trending", async (req, resp) => {
  const TableData = await NewsBlogs.findAll({
    attributes: ["title", "views"],
    order: [["views", "DESC"]],
    limit: 5,
  });
  resp.json(TableData);
});

router.get("/viewsinfo", async (req, resp) => {
  const TableData = await NewsBlogs.findAll({
    attributes: ["views"],
    order: [["views", "DESC"]],
    limit: 5,
  });
  resp.json(TableData);
});

module.exports = router;
