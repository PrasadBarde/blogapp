const express = require("express");
const app = express();

const Blog = require("../models/blogModel")

app.post('/addnewblog', async (req, res) => {
    const data = await Blog.find()
    let ppid = -1
    if (data.length === 0) ppid = 1
    else ppid = data[data.length - 1]._id + 1
    const newBlog = await Blog({
        _id: ppid,
        title: req.body.title,
        image:req.body.image,
        description: req.body.description,
        Date: new Date().toLocaleDateString(),
    })
    newBlog.save().then((data) => {
        console.log('Blog Added')
        res.json(data);
    }).catch(err => console.log(err.message));
});

    
module.exports = app