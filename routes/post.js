const express = require("express");

const router = express.Router();
const Post = require("../models/Post");

//gets back all the post
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

//submitsa post
router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//specific post
router.get("/:postId", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

//deletePost
router.delete("/:postId", async (req, res) => {
  try {
    const post = await Post.remove({ _id: req.params.postId });
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

//update apost
router.patch("/:postId", async (req, res) => {
  try {
    const post = await Post.updateOne({ _id: req.params.postId },{$set:{
      title:req.body.title
    }});
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
