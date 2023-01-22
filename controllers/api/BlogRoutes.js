const router = require('express').Router();
const { Blog,Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/',async (req, res) => {
  //get all the blogs and also include the comment
  try{
    const BlogData = await Blog.findAll({
      include: [{model:Comment}],
  });
  res.status(200).json(BlogData);
}catch(err){
  res.status(500).json(err);
}
});

router.get('/:id',async (req, res) => {
  //get the blog by id and also include the comment
 try{
    const BlogData = await Blog.findByPk(req.params.id, {
     
      include: [{model:Comment}],
 });
 
 if(!BlogData){
  res.status(404).json({message:'Post not found with the id'});
  return;
 }
 res.status(200).json(BlogData);
} catch (err) {
  res.status(500).json(err);
}
});

router.put('/:id',async (req, res) => {
  //update the blog by id 
  const newData = {
    title: req.body.title,
    description:req.body.description,
    articleBody: req.body.articleBody,
  }
   try {
    const BlogData = await Blog.update(newData, {
      where: {
        id: req.params.id,
      },
    });
    
    res.status(200).json(BlogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', withAuth, async (req, res) => {
  //Post the blog entered by the user
  try {
    const newBlog = await Blog.create({
      title: req.body.title,
      description: req.body.description,
      articleBody:req.body.articleBody,  
      user_id: req.session.user_id,
    });

    res.status(200).json(newBlog);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  // console.log(req.params.id)
  // console.log(req.session.user_id)
  try {
    const BlogData = await Blog.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      }

    });

    if (!BlogData) {
      res.status(404).json({ message: 'No Blog found with this id!' });
      return;
    }

    res.status(200).json(BlogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;