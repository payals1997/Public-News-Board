const express = require("express");
const router = express.Router();
const { NewsBlogs } = require("../models");
const {verifyToken} = require("../Middleware/AuthMiddleware");

//fetching all data from NewsBlogs Table

router.get("/", verifyToken, async (req, resp) => {
  const TableData = await NewsBlogs.findAll({
    order: [["id", "DESC"]]
  }
  );
  resp.json(TableData);
});

//fetching data fro NewsBlogs Table by id

router.get("/byId/:id", async (req, resp)=>{
const id =  req.params.id;
const rowdata = await NewsBlogs.findByPk(id);
resp.json(rowdata);
});

//fetching views on the basis of id

router.post("/byId/:id", async (req, resp)=>{
  const id =  req.params.id;
   await NewsBlogs.increment('views', { by: 1, where: { id: id }});

  });

//fetching max viewd news

  router.get("/top10", async (req, resp) => {
    const TableData = await NewsBlogs.findAll({
      order: [["views", "DESC"]],
      limit: 10,
    });
    resp.json(TableData);
  });
  


// inserting News Data in NewsBlogs Table

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
