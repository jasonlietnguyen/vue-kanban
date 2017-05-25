import axios from 'axios'
import router from '../router'


function changeRoute(route){
  router.push(route)
}

let api = axios.create({
  baseURL: 'http://localhost:3000/api/',
  timeout: 2000,
  withCredentials: true
})

  let auth = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 2000,
  withCredentials: true
})

// REGISTER ALL DATA HERE
let state = {
  boards: [{}],
  activeBoard: {},
  error: {},
  user: {}
}

let handleError = (err) => {
  debugger
  state.error = err
}

export default {
  // ALL DATA LIVES IN THE STATE
  state,
  // ACTIONS ARE RESPONSIBLE FOR MANAGING ALL ASYNC REQUESTS
  actions: {
    getBoards() {
      api('userboards')
        .then(res => {
          state.boards = res.data.data
        })
        .catch(handleError)
    },
    getBoard(id) {
      api('boards/' + id)
        .then(res => {
          state.activeBoard = res.data.data
        })
        .catch(handleError)
    },
    createBoard(board) {
      api.post('boards/',board)
        .then(res => {
          this.getBoards()
        })
        .catch(handleError)
    },
    removeBoard(board) {
      api.delete('boards/'+board._id)
        .then(res => {
          this.getBoards()
        })
        .catch(handleError)
    },
    login(user){
      auth.post('login', user)
        .then(res => {
          if(res.data.error){
            handleError(res.data.error)
            }
            changeRoute('/boards')


        })
        .catch(handleError)
    },
     register(user){
      auth.post('register', user)
        .then(res => {
          if(res.data.error ){
            //Fix above line to work with register instead of login
            handleError(res.data.error)
          }
            changeRoute('/boards')


        })
        .catch(handleError)

  }

}
}