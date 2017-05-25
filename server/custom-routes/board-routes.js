let Boards = require('../models/board')
let Lists = require('../models/list')
let Tasks = require('../models/task')
let Comments = require('../models/comment')

// var resources = {
//   Boards,
//   Lists,
//   Tasks,
//   Comments
// }


// function LoadEntityWithRelationship(resource, relation, id, action){
//   return new Promise((resolve, reject) =>{
//   resources[resource].findById(id).then(entity =>{
//     let relationField = resource.toLowerCase() + 'Id'
//     let query = {}
//       query[relationField]
//     resources[relation].find(query).then(relations =>{
//       entity[relation.toLowerCase()] = relations
//       resolve(handleResponse(action, entity))
//     }).catch(error =>{
//       reject(handleResponse(action, null, error))
//     })
//   })
//   })
// }

export default {
  // getListsOnBoard: {
  //   path:'/boards/:boardId/lists',
  //   reqType: 'get',
  //    method(req, res, next){
  //     let action = 'Get All Lists On A Board'
  //     Lists.find({boardId: req.params.boardId})
  //       .then(lists => {
  //         res.send(handleResponse(action, lists))
  //       }).catch(error => {
  //         return next(handleResponse(action, null, error))
  //       })
  //   }
  // },
  // getTasksOnAList:{
  //   path:'/boards/:boardId/lists/:listId/tasks',
  //   reqType: 'get',
  //    method(req, res, next){
  //      debugger
  //     let action = 'Get All Tasks On A List'
  //     Tasks.find({listId: req.params.listId})
  //       .then(tasks => {
  //       Promise.all(tasks.map(task =>{
  //         return Comments.find({taskId: task._id}).then(comments => {
  //           task.comments = comments
  //         })
  //       })).then(() => {
  //         res.send(handleResponse(action, tasks))
  //       })
  //       }).catch(error => {
  //         return next(handleResponse(action, null, error))
  //       })
  //   }
  // },
  getListsByBoard:{
    path:'/boards/:boardId/lists',
    reqType: 'get',
     method(req, res, next){
      let action = 'Return a Board and all Lists on it'
      Boards.findById(req.params.boardId)
        .then(board => {
          debugger
          Lists.find({boardId: req.params.boardId})
            .then(lists => {
            debugger
            board.lists = lists
            res.send(handleResponse(action, board))
          })
        }).catch(error =>{
          debugger
          return next(handleResponse(action, null, error))
        })
    }
  },

  getTasksByList:{
    path: '/boards/:boardId/lists/:listId/tasks',
    reqType: 'get',
    method(req, res, next){
      let action = 'Return a List with all the Tasks on it'
      Lists.findById(req.params.listId)
        .then(list =>{
          Tasks.find({listId: req.params.listId})
          .then(tasks => {
            debugger
            list.tasks = tasks
            res.send(handleResponse(action, list))
          })
        }).catch(error =>{
          return next(handleResponse(action, null, eroor))
        })
    }
  },

  getCommentsbyTask: {
    path: '/boards/:boardId/lists/:listId/tasks/:taskId/comments',
    reqType: 'get',
    method(req, res, next){
      let action = 'Return comments associated with a Task'
      Tasks.findById(req.params.taskId)
        .then(task =>{
          Comments.find({taskId: req.params.taskId})
          .then(comments =>{
            task.comments = comments
              res.send(handleResponse(action, task))
          }).catch(error =>{
            return next(handleResponse(action, null, error))
          })
        })
    }
  },

  deleletsChildrenOfBoards: {
    path: '/boards/:boardId',
    reqType: 'delete',
    method(req, res, next){
      debugger
      let action = 'Removing all children of a Board'
      Boards.findById(req.params.boardId)
        .then(board =>{
          Tasks.find({boardId: req.params.boardId})
          .then(tasks =>{
            Lists.find({boardId: req.params.boardId})
            .then(lists =>{
              Comments.find({boardId: req.params.boardId})
              res.send(handleResponse(action))
            }).catch(error =>{
              return next(handleResponse(action, null, error))
            })
          })
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