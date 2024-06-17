const Post = require("../models/tasks");
const createPath = require("../helpers/create-path");


const postTasks = (req,res) => {
    const { list } = req.body;

  const newPost = new Post({ list });

  newPost
    .save()
    .then(() => res.redirect("/"))
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
}
const deleteTasks = (req,res) => {
    Post.findByIdAndDelete(req.params.id)
    .then((post) => {
      if (post) {
        res.sendStatus(200); 
      } else {
        res.status(404).render(createPath("error"), {
          title: "Error",
          message: "Post not found",
        });
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(500).render(createPath("error"), {
        title: "Error",
        message: "An error occurred while deleting the post",
      });
    });
}
module.exports = {
    
    postTasks,
    deleteTasks
}

