const express = require('express')
const multer = require('multer');
const shortid = require('shortid');
const fs = require('fs')
const path = require('path')
const { NewsBlogs } = require("../models/NewsBlogs");
const { createNews } = require('../controller/addNews')


const router = express.Router()
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(path.dirname(__dirname), '../client/public'));
    },
    filename: function (req, file, cb) {
        cb(null, `news-images/`+ shortid.generate() + '-' + file.fieldname + path.extname(file.originalname))
        
    }
})

const upload = multer({ storage });

let cpUpload = upload.fields([{ name: 'image', maxCount: 1 }, { name: 'video', maxCount: 1 }])
router.post("/", cpUpload, createNews)


router.get("/", async (req, resp)=>{
    const TableData = await NewsBlogs.findAll();
    resp.json(TableData);
});

module.exports = router;