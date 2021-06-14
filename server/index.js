const express = require("express");
const app = express();

const db = require('./models')

db.sequelize.sync({force:false}).then(() =>{
    app.listen(8080,()=>{
        console.log("server is running on port 8080");
        });
});
