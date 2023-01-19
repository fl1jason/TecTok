const router = require('express').Router();
const { User,Blog,Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/:id', withAuth, async (req, res) => {
  try {
    //allows users to enter comments into blogs
    const newComment = await Comment.create({
      post_id: req.params.id,
      body: req.body.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;

