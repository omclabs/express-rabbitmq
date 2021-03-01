const express = require("express");
const router = express.Router();

const posts = require("../controllers/v1/posts");

router.post("/post-to-rabbit", posts.postMessage);

module.exports = router;
