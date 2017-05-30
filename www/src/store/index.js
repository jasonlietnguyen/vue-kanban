import axios from 'axios'
import router from '../router'

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
  boards: [],
  lists: {},
  activeBoard: {},
  error: {},
  user: {}
}

let handleError = (err) => {
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
    getLists(id){
      api('boards/' + id + '/lists')
        .then(res =>{
          state.lists = res.data.data.lists
        })
        .catch(handleError)
    },
    createBoard(board) {
      debugger
      api.post('boards', board)
        .then(res => {
          this.getBoards()
        })
        .catch(handleError)
    },
    removeBoard(board) {
      api.delete('boards/' + board._id)
        .then(res => {
          this.getBoards()
        })
        .catch(handleError)
    },
    login(user) {
      auth.post('login', user)
        .then(res => {
          console.log(res)
          state.user = res.data.data
          router.push('/dashboard')
        })
        .catch(handleError)
    },
    register(user) {
     auth.post('register', user)
      .then(res =>{
        console.log(res)
        if(res.data.error){
          return handleError(res.data.error)
        }
        //LETS REDIRECT THE PAGE
        state.user = res.data
        router.push('/dashboard')
      })
      .catch(handleError)
    },
    getAuth(){
      auth('authenticate')
        .then(res =>{
          state.user = res.data.data || {}
          router.push('/dashboard')
        }).catch((err =>{
        }))

    },
    clearError(){
      state.error = {}
    }
  }
}