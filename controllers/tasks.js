const Task = require('../models/taskModel');

async function CreateNewTask(req, res,next){
   
        let taskObj = {
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
        }

  try {
       let checkTask = await Task.findOne({title: taskObj.title})
       if(!checkTask){
            let addedTaskDetails= await Task.create(taskObj);

       return res.status(201).json({
        success: true,
        data : addedTaskDetails
       })
    }else{
        return res.status(400).json({
            success: false,
            message : "This title is already used. Please use another title"
        })
    }
    
   } catch (error) {
    console.log(error.message)
        return res.status(500).json({
            success: false,
            message : "Some internal server Error while creating new task...",
            error: error.message,
        })
   }
}

async function getTaskList(req, res, next){
    try {
         let getAllTasksData =  await Task.find();
         if(getAllTasksData.length == 0){
           return res.status(404).json({
            success: false,
            message : "No Task Found...!"
           })
         }else{

         return res.status(200).json({
              success: true,
              message : "Task List",
              data : getAllTasksData,
          })
        }
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({
            success: false,
            message : "Some internal server Error while fetching all tasks...",
            error: error.message,
        })
    }
}

async function getSingleTaskDetails(req, res, next){
         let  task_id = req.params.id
         
         try {
             let taskData = await Task.findById({_id: task_id})
             if(!taskData){
                return res.status(404).json({
                    success: false,
                    message : "No Task found",
                    
                })
             }
             return res.status(200).json({
                success: true,
                message: "Task details",
                data: taskData
             })
         } catch (error) {
            console.log(error.message)
            return res.status(500).json({
                success: false,
                message : "Some internal server Error while fetching Single task details..",
                error: error.message,
            })
         }
}

async function delateTask(req, res, next){
    let  task_id = req.params.id

    try {
         let deletedTaskData = await Task.deleteOne({_id:task_id})
         if(deletedTaskData.deletedCount == 0){
            return res.status(404).json({
                success : false,
                message : "No Task found",
               // data : deletedTaskData,
            })
         }
         return res.status(200).json({
            success: true,
            message : "Task removed successfully...",
            //data: deletedTaskData
         })
    } catch (error) {
        return res.status(500).json({
        success : false,
        message : "Some Internal server error while deleting task",
        error: error.message,
    })
}
}

async function updateTaskDetails(req, res, next){
    let task_id = req.params.id
    let taskObj = {
        title: req.body.title,
        description: req.body.description,
        status: req.body.status,
    }

    try {
        let task = await Task.findById({_id:task_id});
        if(task){
        let updateTaskDetails = await Task.findByIdAndUpdate(task_id, taskObj, {new:true})
          return res.status(200).json({
            success: true,
            message : "Task Details Updated are Successfully",
            data : updateTaskDetails
          })
        }else{
            return res.status(404).json({
                success : false,
                message : "No Task Is Found"
            })
        }
    } catch (error) {
        return res.status(500).json({
            success : false,
            message : "Some internal server error while updating task details...",
            error: error.message
        })
    }
}


module.exports = {getTaskList, CreateNewTask, getSingleTaskDetails, delateTask, updateTaskDetails}