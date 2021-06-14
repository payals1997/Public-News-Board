const express = require('express')
const router = express.Router()
const {NewsBlogs} = require("../models");

router.get("/", async (req, resp)=>{
    const TableData = await NewsBlogs.findAll();
    resp.json(TableData);
});

router.post("/", async (req, resp)=>{
    const row = req.body
    await NewsBlogs.create(row);
    resp.json(row);
})


module.exports = router;