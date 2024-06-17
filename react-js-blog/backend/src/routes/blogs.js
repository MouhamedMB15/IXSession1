

const express = require('express');
const router = express.Router();
const blogController = require("../controllers/blogs");

const {protect} = require("../middleware/authMiddleware");
const {upload} = require("../middleware/mutler");

const logMiddleware = (req, res, next) => {
  console.log("I am a middleware");
  console.log(req.body);
  next();
};




/**
 * POST /api/blogs
 */
router.post("/", logMiddleware, protect, (req, res) => {
  blogController.createBlogs(req, res);
});
//Upload IMG
router.post("/", protect, upload.single("image"), (req, res) => {
  blogController.createBlogs(req, res);
});

/**
 * GET /api/blogs
 */
router.get("/", (req, res) => {
  blogController.getBlogs(req, res);
});

/**
 * Get blogs by blogID
 * GET /api/blogs/:id
 */
router.get("/:id", (req, res) => {
  blogController.getBlogById(req, res);
});

/**
 * Get blogs by categoryID
 * GET /api/blogs/categories/:id
 */
router.get("/categories/:id", (req, res) => {
  blogController.getBlogsByCategoryID(req, res);
});

/**
 * Put /api/blogs/
 */
router.put("/:id", protect, (req, res) => {
  blogController.updateBlogByID(req, res);
});

//put img
router.put("/:id", protect, upload.single("image"), (req, res) => {
  blogController.updateBlogByID(req, res);
});
/**
 * DELETE /api/blogs/
 */
router.delete("/:id", (req, res) => {
  blogController.deleteBlogByID(req, res);
});



module.exports = router;



// const express = require("express");
// const router = express.Router();
// const {
//   createBlogs,
//   getBlogs,
//   getBlogById,
//   getBlogsByCategoryID,
//   updateBlogByID,
//   deleteBlogByID,
// } = require("../controllers/blogs");
// const { protect } = require("../middleware/authMiddleware");

// //Create Blogs
// router.post("/", protect, (req, res) => {
//   createBlogs(req, res);
// });

// //Get Blogs
// router.get("/", (req, res) => {
//   getBlogs(req, res);
// });
// //Get Blog By ID
// router.get("/:id", (req, res) => {
//   getBlogById(req, res);
// });

// //Get Blog By Cateogry ID
// router.get("/categories/:id", protect, (req, res) => {
//   getBlogsByCategoryID(req, res);
// });
// //Update Blog By ID 
// router.put("/:id", protect, (req, res) => {
//   updateBlogByID(req, res);
// });

// //Delete Blog By ID
// router.delete("/:id", (req, res) => {
//   deleteBlogByID(req, res);
// });

// module.exports = router;