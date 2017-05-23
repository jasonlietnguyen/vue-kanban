let Boards = require('../models/board')
let Lists = require('../models/list')

export default {
  getAll: {
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