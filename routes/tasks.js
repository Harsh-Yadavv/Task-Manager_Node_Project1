const express = require("express")
const router = express.Router()

//destructuring the object {....}
const {getAllTasks} = require('../controllers/tasks')
const {createTask} = require('../controllers/tasks')
const {getTask, updateTask, deleteTask} = require('../controllers/tasks')


router.route('/').get(getAllTasks)
router.route('/').post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask) //chaining

module.exports = router