const { users, tasklists, admins } = require("../models/collections")

register = (req, res) => {
    //destructuring
    const { fullname, email, password } = req.body

    //check user data in collection
    //asynchronous ,db run, so then()
    users.findOne({ email }).then(user => {
        if (user) {
            // res.send("User Already exists")
            //json() = js code converts to json and send to the server

            res.status(400).json({
                message: "User Already exists",
                status: false,
                statusCode: 400
            })
        }
        else {
            //create an object for user
            //same name varunnath kond aanu acno,psw,uname oke single aayi kodukunnath sherikum acno:acno nammal kodukkunna name same aanenkil eee name...allenki aa name thanne kodukkanam. ingane aanu.
            //balance=0, adyam 0 balance aayirikumallo.
            let newUser = new users({
                fullname,
                email,
                password,
            })
            //save in db
            newUser.save()
            // res.send("Account created successfully")
            //json() = js code converts to json and send to the server
            res.status(201).json({
                message: "Account created successfully",
                status: true,
                statusCode: 201
            })
        }
    })
}

// user-login
loginuser = (req, res) => {
    const { email, password } = req.body
    users.findOne({ email, password }).then(user => {
        if (user) {
            res.status(200).json({
                message: "Login success",
                status: true,
                statucode: 200,
                Currentuser: user.fullname,
                uid: user._id,
                email: user.email
            })
        }
        else {
            res.status(404).json({
                message: "Incorrect email or password",
                status: false,
                statusCode: 404
            })
        }

    })
}

// tasklist 
addTask = (req, res) => {
    //destructuring
    const { title, description, email, taskstatus, date } = req.body

    //check user data in collection
    //asynchronous ,db run, so then()
    tasklists.findOne({ email }).then(task => {
        if (task) {
            // res.send("User Already exists")
            //json() = js code converts to json and send to the server

            res.status(400).json({
                message: "Task already assigned for this person",
                status: false,
                statusCode: 400
            })
        }
        else {
            //create an object for user
            //same name varunnath kond aanu acno,psw,uname oke single aayi kodukunnath sherikum acno:acno nammal kodukkunna name same aanenkil eee name...allenki aa name thanne kodukkanam. ingane aanu.
            //balance=0, adyam 0 balance aayirikumallo.
            let newTask = new tasklists({
                title,
                description,
                email,
                taskstatus,
                date
            })
            //save in db
            newTask.save()
            // res.send("Account created successfully")
            //json() = js code converts to json and send to the server
            res.status(201).json({
                message: "Task Assigned successfully",
                status: true,
                statusCode: 201
            })
        }
    })
}
// admin login
adminLogin = (req, res) => {
    const { username, password } = req.body
    admins.findOne({ username, password }).then(data => {
        if (data) {
            res.status(200).json({
                message: "Login success",
                status: true,
                statusCode: 200,
                Currentuser: data.username,
                password: data.password,

            })
        } else {
            res.status(404).json({
                message: "Not Found",
                status: false,
                statusCode: 200
            })
        }
    })
}

// getalltasks
getalltasks = (req, res) => {
    tasklists.find().then(list => {
        if (list) {
            res.status(200).json({
                message: list,
                status: true,
                statusCode: 200,
            })
        }
    })
}

// getalltasks
getallusers = (req, res) => {
    users.find().then(list => {
        if (list) {
            res.status(200).json({
                message: list,
                status: true,
                statusCode: 200,
            })
        }
    })
}

// getOneTask 
getOneTask = (req, res) => {
    const { id } = req.params
    tasklists.findOne({ _id: id }).then(task => {
        if (task) {
            res.status(200).json({
                message: task,
                statucode: 200,
                status: true
            })
        } else {
            res.status(404).json({
                message: "no data",
                status: false,
                statusCode: 404
            })
        }
    })
}

// Edit Task
edittask = (req, res) => {
    const { id } = req.params
    const { title, description, email, taskstatus, date } = req.body
    tasklists.findOne({ _id: id }).then(data => {
        data.title = title,
            data.description = description,
            data.email = email,
            data.taskstatus = taskstatus,
            data.date = date
        data.save()
        res.status(200).json({
            message: data,
            status: true,
            statusCode: 200
        })

    })
}
// deletetask
deletetask = (req, res) => {
    const { id } = req.params
    tasklists.deleteOne({ _id:id }).then(task => {
        if (task) {
            res.status(200).json({
                message: "Task deleted",
                status: true,
                statusCode: 200
            })
        }
        else {
            res.status(404).json({
                message: "Task Not Found",
                statuCode: 404,
                status: false
            })
        }
    })
}
module.exports = {
    register, loginuser, addTask, getalltasks, getallusers, getOneTask, edittask,deletetask
}