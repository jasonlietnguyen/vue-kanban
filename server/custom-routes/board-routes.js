let Boards = require('../models/board')
let Lists = require('../models/list')
let Tasks = require('../models/task')
let Comments = require('../models/comment')

export default {
  getListsOnBoard: {
    path:'/boards/:boardId/lists',
    reqType: 'get',
     method(req, res, next){
      let action = 'Get All Lists On A Board'
      Lists.find({boardId: req.params.boardId})
        .then(lists => {
          res.send(handleResponse(action, lists))
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  },
  getTasksOnLists:{
    path:'/boards/:boardId/lists/:listId/tasks',
    reqType: 'get',
     method(req, res, next){
       debugger
      let action = 'Get All Tasks On A List'
      Tasks.find({listId: req.params.listId})
        .then(tasks => {
        Promise.all(tasks.map(task =>{
          return Comments.find({taskId: task._id}).then(comments => {
            task.comments = comments
          })
        })).then(() => {
          res.send(handleResponse(action, tasks))
        })
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  }
}


function handleResponse(action, data, error) {
    var response = {
      action: action,
      data: data
    }
    if (error) {
      response.error = error
    }
    return response
  }