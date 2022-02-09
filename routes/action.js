const express = require('express');
const router = express.Router();

// import actions controller path to use required controller
const actionsController = require('../controllers/actions_controller');
router.use(express.urlencoded({ extended: true }));  // middleware

//creating task
router.post('/create-task', actionsController.create);

//delete task
router.post('/delete-tasks', actionsController.delete);
module.exports = router;