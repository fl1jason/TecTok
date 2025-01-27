const router = require('express').Router();
const { Blog , User ,Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all Blogs and JOIN with user data
    const BlogData = await Blog.findAll({
      include: [
        {model: User},
        {model: Comment}
    ],
    });

    // Serialize data so the template can read it
    const Blogs = BlogData.map((blog) => blog.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      Blogs, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/blog/:id', async (req, res) => {
  try {
    const BlogData = await Blog.findByPk(req.params.id, {
      include: [
             {model: User,
            },
            {
              model:Comment,
              include: 
                {
                model:User,
                attributes:['name'],
              },
          },
        ],
    });
    const Blogs = BlogData.get({ plain: true });

    res.render('blog', {
      ...Blogs,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Blog }],
    });

    const user = userData.get({ plain: true });

    res.render('dashboard', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});

module.exports = router;
