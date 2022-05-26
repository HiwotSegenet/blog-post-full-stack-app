const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  subject: String,
  text: String,
  //blogId: String,
  authorId: String,
  userName: String,
  date: String,
});

module.exports = Blog = mongoose.model("Blog", blogSchema);
