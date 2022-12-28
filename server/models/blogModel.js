const mongoose = require("mongoose");


const propertySchema = new mongoose.Schema({
  // BASIC INFO
  //-----------------------------------------------
  _id: Number,
 title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  Date : { type : String },
  
});

const Blog =  mongoose.model("blog", propertySchema);
module.exports = Blog;