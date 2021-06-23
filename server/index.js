const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')
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

app.use("/newsBlogs",newsBlog_router)

app.use('/', express.static(path.join(__dirname, '../client/public/news-images/')))

db.sequelize.sync({force:false, alter:true}).then(()=>{
app .listen("3001",()=>{
    console.log("server started at port 3001......");
    });
})