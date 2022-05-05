const {
  getUsersPosts,
  createBlogPost,
  updateBlogPost,
  deleteBlogPost
} = require("../controllers/blogController");

// auth is our custom middleware
const auth = require("../middleware/auth");
const router = require("express").Router();

// route: /blog
// header => x-auth-token
router.get("/", auth, getUsersPosts);

// route: /blog/new
// header => x-auth-token
// accepts : req.body =>
router.post("/new", auth, createBlogPost);

router.put("/update", updateBlogPost);

router.put("/delete", deleteBlogPost);



module.exports = router;
