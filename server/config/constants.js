const actions = {
  create: 'Create',
  update: 'Update',
  remove: 'Remove',
  find: 'Find',
  findAll: 'Find All'
}

const models = {
  board: {
    name: 'Board',
    endpoint: 'boards'
  },
  list: {
    name: 'List',
    endpoint: 'lists'
  },
  task: {
    name: 'Task',
    endpoint: 'tasks'
  },
  comment: {
    name: 'Comment',
    endpoint: 'comments'
  },
  user: {
    name: 'User',
    endpoint: 'users',
    preventDefaultApi: true,
    useCustomRoutes: true
  }
}


export  {
  actions,
  models
}