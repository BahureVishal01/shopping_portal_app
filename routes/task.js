const taskController = require('../controllers/tasks');
const errorMiddleware = require('../middlewares/errorMiddleware');
const express = require('express')
const router = express.Router();

router.get('/allTasks', taskController.getTaskList);
router.post('/newTask', taskController.CreateNewTask);
router.get('/singleTaskDetails/:id', errorMiddleware.validateIdFormat, taskController.getSingleTaskDetails);
router.delete('/removeTask/:id', errorMiddleware.validateIdFormat, taskController.delateTask);
router.put('/updateTask/:id', errorMiddleware.validateIdFormat, taskController.updateTaskDetails)


module.exports = router;

