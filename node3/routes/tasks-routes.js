const express = require('express')
const router = express.Router()

const {
    getTasks,
    postTasks,
    deleteTasks,
  } = require("../controllers/tasks-controller");



router.get('/tasks', postTasks);
router.get('/tasks', deleteTasks);

  module.exports = router