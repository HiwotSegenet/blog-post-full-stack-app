const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  subject: String,
  text: String,
  blogId: String,
});

module.exports = Blog = mongoose.model("Blog", blogSchema);
