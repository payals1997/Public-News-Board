const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')
// const multer = require('multer');
// const utils = require('./utils')
// const fs = require('fs')
const path = require('path')


const app = express();
// app.use(cors('*'))
app.use(cors({
    origin: true,
    methods: ["GET", "POST"],
    credentials: true
}))

app.use(express.json());

const db = require('./models');

//Routers

const newsBlog_router = require('./routes/newsBlog-routes')
const imageRouter = require('./routes/uploads')

app.use("/newsBlogs",newsBlog_router)
app.use("/image", imageRouter)
app.use('/', express.static(path.join(__dirname, '/')));

db.sequelize.sync({force:false}).then(()=>{
app .listen("3001",()=>{
    console.log("server started at port 3001......");
    });
})