const { NewsBlogs } = require("../models");
const shortid = require("shortid");

exports.createNews = async (req, resp) => {
  const row = {
    title: req.body.title,
    image: req.files['image'][0].filename,
    video: req.files['video'][0].filename,
    content: req.body.content,
    Reporter_name: req.body.Reporter_name,
    category: req.body.category,
    newsCity: req.body.newsCity,
  };

  await NewsBlogs.create(row);
  console.log(row);
  resp.json(row);
};
