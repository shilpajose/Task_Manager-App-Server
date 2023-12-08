const express = require('express')
const { register,loginuser,addTask,getalltasks,getallusers,getOneTask,edittask,deletetask,editStatus,getOnestatus} = require('../controllers/logic')

const router=new express.Router()

//create account/register-user
router.post('/register',register)

// user login
router.post('/login',loginuser)

// task list
router.post('/addtask',addTask)

// admin login
router.post('/admin-login',adminLogin)

// // get all tasks
router.get('/getalltasks',getalltasks)

// // get all users
router.get('/getallusers',getallusers)

// get one task for user
router.get('/one-task/:id',getOneTask)

// edit task edittask
router.put('/edittask/:id',edittask)

// get one status for user
router.get('/one-status/:id',getOnestatus)

// editStatus
router.put('/editStatus/:id',editStatus)

// delete task
router.delete('/delete-task/:id',deletetask)



module.exports=router